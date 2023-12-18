'use client';
import React, { use, useCallback, useEffect, useRef, useState } from 'react';
import { WORDS, TEST_LETTER } from 'helpers/lessonData';
import { getStageTestTime } from 'models/exercise/selectors/exerciseSelectors';
import { exerciseActions } from 'models/exercise/slice/exerciseSlice';
import { StageTestExercise } from 'models/exercise/types/exerciseSchema';
import { getErrorIndexes, getLetters, getNextIndex } from 'models/keyboard/selectors/keyboardSelectors';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Keyboard from '../keyboard/Keyboard';
import cls from './exersiceForTests.module.css';
import TimeTest from './TimeTest';
import WordTest from './WordTest';


export type Word = {
  id: number,
  words: string[]
}

export type Letters = {
  id: number,
  words: string[],
  time: number
}


const ExersiceForTests: React.FC = () => {
  const { type: routeType, test } = useParams<{ type: string, test: string }>();
  const [word, setWord] = useState<Word[]>(WORDS);
  const dispatch = useDispatch();
  const errorIndexes = useSelector(getErrorIndexes);
  const currentIndex = useSelector(getNextIndex);
  let cumulativeIndex = 0;
  const anchor = useRef<HTMLDivElement>(null);
  const progress = useSelector(getStageTestTime);



  // eslint-disable-next-line no-undef
  const changeObserver: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach(entry => {
        entry.target.scrollIntoView({ block: 'end' });
      }
      );
    }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const ref = anchor.current;
    if (ref) {
      observer = new IntersectionObserver(changeObserver, { threshold: 1 });
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [currentIndex, changeObserver]);

  useEffect(() => {
    if (routeType === 'word') {
      dispatch(keyboardActions.setCurrentLetter(WORDS[+test - 1].words.join('\n')));
    } else if (routeType === 'time') {
      dispatch(keyboardActions.setCurrentLetter(TEST_LETTER[+test - 1].words.join('\n')));
    }
    dispatch(keyboardActions.handleChangeValidate('half'));
    return () => {
      dispatch(keyboardActions.handleChangeValidate('full'));
    };
  }, [dispatch]);

  console.log(progress)
  useEffect(() => {
    if (routeType === 'time') {
      if (Math.ceil(progress) >= 106) {
        dispatch(exerciseActions.setTestStage(StageTestExercise.RESULT_TIME));
      }
    } else {
      if (currentIndex === WORDS[+test - 1].words.join('\n').length) {
        dispatch(exerciseActions.setTestStage(StageTestExercise.RESULT_WORD));
      }
    }
  }, [dispatch, progress, currentIndex, routeType, test]);

  return (
    <>
      <div className={cls.main_block}>
        {
          routeType === 'word' ?
            <WordTest
              anchor={anchor}
              letters={WORDS[+test - 1].words}
              cumulativeIndex={cumulativeIndex}
              errorIndexes={errorIndexes}
              currentIndex={currentIndex} />
            :
            <TimeTest
              anchor={anchor}
              letters={TEST_LETTER[+test - 1].words}
              cumulativeIndex={cumulativeIndex}
              errorIndexes={errorIndexes}
              currentIndex={currentIndex} />
        }
        <Keyboard isDelete={true} type='test' />
      </div>
    </>
  );
};

export default ExersiceForTests;
