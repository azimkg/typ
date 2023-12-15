import React, { FC } from 'react';
import classes from 'classnames';
import { TFunction } from 'i18next';
import Button from '../button/Button';
import TooltipContent from '../tooltip/Tooltip';
import cls from './testResult.module.css';


interface TestResultBtnProps {
  handleEscAction: () => void
  handleRepeatAction: () => void
  handleEnterAction: () => void
  t: TFunction
  types: 'word' | 'time'
}

const TestResultBtn: FC<TestResultBtnProps> = ({ handleEscAction, handleRepeatAction, handleEnterAction, t, types }) => {
  return (
    <div className={cls.btn_blocks}>
      <Button className={classes(cls.btn_exit, 'exit')} onClick={handleEscAction}>
        {t('button.exit')}
        <span>(esc)</span>
      </Button>
      <TooltipContent anchorSelect='.exit' content={t('tooltip.esc')} />
      <div className={cls.btn_block}>
        <Button className={classes(cls.btn_exit, 'repeat')} onClick={handleRepeatAction}>
          {t('button.repeat')}
          <span>(R)</span>
        </Button>
        <TooltipContent anchorSelect='.repeat' content={t('tooltip.r')} />
        <Button className={classes(cls.btn_continue, 'continue', { [cls.btn_hidden]: types === 'word' })} onClick={handleEnterAction}>
          {t('button.continue')}
          <span>(enter)</span>
        </Button>
        <TooltipContent anchorSelect='.continue' content={t('tooltip.enter')} />
      </div>
    </div>
  );
};

export default TestResultBtn;