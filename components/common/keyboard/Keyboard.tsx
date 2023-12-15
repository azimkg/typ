'use client';
import { useEffect, useCallback, FC } from 'react';
import classes from 'classnames';
import Button, { ButtonProps } from 'common/keyboardButton/KeyboardButton';
import KeyboardSettings from 'common/keyboardSettings/KeyboardSettings';
import KeyboardLeftHand from 'components/keyboardHand/KeyboardLeftHand';
import KeyboardRightHand from 'components/keyboardHand/KeyboardRightHand';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getKeyboardAndHands, getKeyboardVisible, keyboardRows } from 'models/keyboard/selectors/keyboardSelectors';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useSelector } from 'react-redux';
import cls from './Keyboard.module.css';


interface KeyboardProps {
  isDelete?: boolean
  type?: 'test' | 'default'
}

const Keyboard: FC<KeyboardProps> = ({ isDelete = false, type = 'default' }) => {
  const dispatch = useAppDispatch();
  const keyboardList = useSelector(keyboardRows);
  const keyboardVisible = useSelector(getKeyboardVisible);
  const keyboardAndHands = useSelector(getKeyboardAndHands);
  const handleKeyDown = useCallback((ev: KeyboardEvent) => {
    ev.preventDefault();
    const key = ev.key;
    if (
      key.length === 1 && key.charCodeAt(0) <= 127 ||
      key.charCodeAt(0) >= 1040 && key.charCodeAt(0) <= 1103
    ) {
      dispatch(keyboardActions.handleChangeKeyboard());
    }
    else if (key === 'Backspace' && isDelete) {
      dispatch(keyboardActions.handleDelete());
    } else if (key === 'Enter') {
      dispatch(keyboardActions.handleChangeKeyboard());
    }
  }, [dispatch]);

  const handleKeyUp = useCallback((ev: KeyboardEvent) => {
    ev.preventDefault();
    const key = ev.key;
    if (
      key.length === 1 && key.charCodeAt(0) <= 127 ||
      key.charCodeAt(0) >= 1040 && key.charCodeAt(0) <= 1103
    ) {
      dispatch(keyboardActions.handleSetNull(key));
    } else if (key === 'Enter') {
      dispatch(keyboardActions.handleSetNull('\n'));
    }
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyUp, false);
    window.addEventListener('keyup', handleKeyDown, false);
    return () => {
      window.removeEventListener('keydown', handleKeyUp, false);
      window.removeEventListener('keyup', handleKeyDown, false);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div className={cls.keyboard_container}>
      <div className={cls.keyboard_top}>
        <KeyboardSettings type={type} />
      </div>
      <div className={classes(cls.keyboard_main, { [cls.keyboard_hidden]: !keyboardVisible }, { [cls.keyboard_hidden]: type === 'test' })}>
        <div className={cls.keyboard_btns_group}>
          {keyboardList.row1.map((item: ButtonProps, index: number) => <Button key={index} {...item} />)}
        </div>
        <div className={cls.keyboard_btns_group}>
          {keyboardList.row2.map((item: ButtonProps, index: number) => <Button key={index} {...item} />)}
        </div>
        <div className={cls.keyboard_btns_group}>
          {keyboardList.row3.map((item: ButtonProps, index: number) => <Button key={index} {...item} />)}
        </div>
        <div className={cls.keyboard_btns_group}>
          {keyboardList.row4.map((item: ButtonProps, index: number) => <Button key={index} {...item} />)}
        </div>
        <div className={cls.keyboard_btns_group}>
          {keyboardList.row5.map((item: ButtonProps, index: number) => <Button key={index} {...item} />)}
        </div>
      </div>
      {
        keyboardAndHands ? <>
          <div style={{ position: 'absolute', top: '80px', left: '-38px' }}>
            <KeyboardLeftHand />
          </div>
          <div style={{ position: 'absolute', top: '80px', left: '298px' }}>
            <KeyboardRightHand />
          </div>
        </> : null
      }
    </div>
  );
};

export default Keyboard;
