'use client';
import React, { FC, useEffect } from 'react';
import Enter from '@icons/newLine.svg';
import classes from 'classnames';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { exerciseActions } from 'models/exercise/slice/exerciseSlice';
import { StageExercise, StageTestExercise } from 'models/exercise/types/exerciseSchema';
import { getErrorIndexes, getNextIndex } from 'models/keyboard/selectors/keyboardSelectors';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Container from '../container/Container';
// eslint-disable-next-line import/no-named-as-default
import ProgressInfo from '../resultLesson/ProgressInfo';
import SmallContainer from '../smallContainer/SmallContainer';
import cls from './testResult.module.css';
import TestResultBtn from './TestResultBtn';
import TimeCertificate from './TimeCertificate';
import WordCertificate from './WordCertificate';


interface TestResultProps {
  accuracy: number
  time: number
  speed: number
  title: string
  types?: 'word' | 'time'
  text: string[]
}

const TestResult: FC<TestResultProps> = (props) => {
  const {
    accuracy = 50,
    time = 95,
    speed = 50,
    title = 'Новая буква',
    types = 'time',
    text
  } = props;
  const errorIndexes = useSelector(getErrorIndexes);
  const currentIndex = useSelector(getNextIndex);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { locale, type, test, lesson } = useParams<{ locale: string, type: string, test: string, lesson: string }>();
  let resultidx = 0;
  const handleRepeatAction = () => {
  };

  const handleEnterAction = () => {

  };

  const handleEscAction = () => {
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
      resultidx = 0;
    };
  }, []);


  return (
    <Container>
      <SmallContainer>
        <h2 className={cls.result_title}>Тест <span>{title}</span> завершен</h2>
        <div className={cls.result_block}>
          <div className={cls.block_right}>
            <div className={cls.result}>
              {text.map((word, wordIndex) => {
                return (
                  <div key={wordIndex} className={classes(cls.line)}>
                    {word.split(' ').map((letter, letIndex) => {
                      const cumulativeIndex = wordIndex + letIndex;
                      let isWordError = false;
                      letter.split('').forEach((_, idx) => {
                        if (errorIndexes.includes(resultidx)) {
                          isWordError = true;
                        }
                        resultidx++;
                      });
                      resultidx++;
                      return (
                        <div
                          key={cumulativeIndex}
                          className={classes(
                            cls.newletter_box,
                            { [cls.error]: isWordError },
                            { [cls.every]: currentIndex < cumulativeIndex },
                          )}
                        >
                          <div className={classes({ [cls.border]: currentIndex === cumulativeIndex })}></div>
                          <p>{letter}&nbsp;</p>
                        </div>
                      );
                    })}
                    {wordIndex !== text.length - 1 && (
                      <>
                        <Enter key={`icon_${wordIndex}`} className={classes(cls.icon_enter, { [cls.icon]: currentIndex < wordIndex + word.length })} />
                        <p className={cls.hidden_i}>{wordIndex + word.length}</p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <ProgressInfo time={time} accuracy={accuracy} speed={speed} />
          </div>
          <div>
            <WordCertificate title={title} />
          </div>
          <div className={classes(cls.jkasdkja, { [cls.btn_hidden]: type === 'time' })}>
            <TimeCertificate />
          </div>
        </div>
        <TestResultBtn handleEscAction={handleEscAction} handleRepeatAction={handleRepeatAction} handleEnterAction={handleEnterAction} t={t} types={types} />
      </SmallContainer>
    </Container>
  );
};

export default TestResult;
