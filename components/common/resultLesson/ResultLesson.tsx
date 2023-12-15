'use client';
import React, { FC, useEffect } from 'react';
import classes from 'classnames';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Button from '../button/Button';
import Container from '../container/Container';
// eslint-disable-next-line import/no-named-as-default
import TooltipContent from '../tooltip/Tooltip';
import BadResult from './BadResult';
import ProgressInfo from './ProgressInfo';
import cls from './resultLesson.module.css';
import SuccessResult from './SuccessResult';


interface ResultLessonProps {
  accuracy: number
  time: number
  speed: number
}

const ResultLesson: FC<ResultLessonProps> = (props) => {
  const {
    accuracy = 50,
    time = 95,
    speed = 50
  } = props;
  const dispatch = useAppDispatch();
  const { locale, type } = useParams<{ locale: string, type: string }>();
  const { t } = useTranslation();

  const handleReset = () => {
    dispatch(keyboardActions.handleReset());
  };

  const handleReturn = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const route = useRouter();
    const href = `/${locale}/lessons/${type}`;
    route.push(href);
    dispatch(keyboardActions.handleReset());
  };

  const handleRepeatAction = () => {
    console.log('Repeat action');
    handleReset();
  };

  const handleEnterAction = () => {
    console.log('Enter action');
  };

  const handleEscAction = () => {
    console.log('Esc action');
    handleReturn();

  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();

    switch (key) {
      case 'r':
        handleRepeatAction();
        break;
      case 'enter':
        handleEnterAction();
        break;
      case 'escape':
        handleEscAction();
        break;
      default:
        break;
    }
  };



  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container>
      {accuracy >= 60 ? <h2 className={cls.result_title}>{t('result.result-title')}</h2> : null}
      <div className={cls.result_block}>
        <div className={cls.block_right}>
          <div className={cls.result}>
            {accuracy >= 60 ? <SuccessResult accuracy={accuracy} /> : <BadResult repeatAction={handleRepeatAction} />}
          </div>
        </div>
        <div>
          <ProgressInfo time={time} accuracy={accuracy} speed={speed} />
        </div>
      </div>
      <div className={cls.btn_blocks}>
        <Button className={classes(cls.btn_exit, 'exit')} onClick={handleEscAction}>
          {t('button.exit')}
          <span>(esc)</span>
        </Button>
        <TooltipContent anchorSelect='.exit' content={t('tooltip.esc')} />
        {accuracy >= 60 ?
          <div className={cls.btn_block}>
            <Button className={classes(cls.btn_exit, 'repeat')} onClick={handleRepeatAction}>
              {t('button.repeat')}
              <span>(R)</span>
            </Button>
            <TooltipContent anchorSelect='.repeat' content={t('tooltip.r')} />
            <Button className={classes(cls.btn_continue, 'continue')} onClick={handleEnterAction}>
              {t('button.continue')}
              <span>(enter)</span>
            </Button>
            <TooltipContent anchorSelect='.continue' content={t('tooltip.enter')} />
          </div>
          :
          null
        }
      </div>
    </Container>
  );
};

export default ResultLesson;