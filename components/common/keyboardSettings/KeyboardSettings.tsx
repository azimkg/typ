import React, { FC } from 'react';
import HandOff from '@icons/handOff.svg';
import HandOn from '@icons/handOn.svg';
import KeyboardOff from '@icons/keyboardOff.svg';
import KeyboardOn from '@icons/keyboardOn.svg';
import Settings from '@icons/settings.svg';
import SoundOn from '@icons/soundOn.svg';
import classes from 'classnames';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getHandsVisible, getKeyboardAndHands, getKeyboardVisible } from 'models/keyboard/selectors/keyboardSelectors';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useSelector } from 'react-redux';
import cls from './KeyboardSettings.module.css';


interface KeyboardSettingsProps {
  type?: 'test' | 'default'
}

const KeyboardSettings: FC<KeyboardSettingsProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const keyboardVisible = useSelector(getKeyboardVisible);
  const handsVisible = useSelector(getHandsVisible);
  const keyboardAndHands = useSelector(getKeyboardAndHands);
  const handleKeyboardVisible = () => {
    dispatch(keyboardActions.setKeyboardVisible(!keyboardVisible));
  };
  const handleHandVisible = () => {
    dispatch(keyboardActions.setHandsVisible(!handsVisible));
  };
  const handleModalOpen = () => {
    if (type === 'default') {
      dispatch(keyboardActions.setSettingsModal(true));
    } else if (type === 'test') {
      return;
    }

  };

  return (
    <div className={cls.keyboard_top_icons_group}>
      <div>
        <SoundOn />
      </div>
      <div onClick={handleKeyboardVisible}>
        {keyboardVisible ? type === 'test' ? <KeyboardOff /> : <KeyboardOn /> : <KeyboardOff />}
      </div>
      <div onClick={handleHandVisible}>
        {keyboardAndHands ? type === 'test' ? <HandOff /> : <HandOn /> : <HandOff />}
      </div>
      <div className={cls.keyboard_vertical_line}></div>
      <div onClick={handleModalOpen} className={classes({ [cls.set_opasity]: type === 'test' })}>
        <Settings />
      </div>
    </div>
  );
};

export default KeyboardSettings;
