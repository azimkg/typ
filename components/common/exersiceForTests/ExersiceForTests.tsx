'use client';
import React, { use, useCallback, useEffect, useRef, useState } from 'react';
import { WORDS } from 'helpers/lessonData';
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


const letters = ['The life story of American physicist Robert', 'Oppenheimer, who led the first development ', 'of nuclear weapons.'];
const combinedString = letters.join('\n');
const ExersiceForTests: React.FC = () => {
  const { type: routeType, test } = useParams<{ type: string, test: string }>();
  const [word, setWord] = useState<Word[]>(WORDS);
  const dispatch = useDispatch();
  const errorIndexes = useSelector(getErrorIndexes);
  const currentIndex = useSelector(getNextIndex);
  let cumulativeIndex = 0;
  const anchor = useRef<HTMLDivElement>(null);


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
    } else {
      dispatch(keyboardActions.setCurrentLetter(combinedString));
    }
    dispatch(keyboardActions.handleChangeValidate('half'));
    return () => {
      dispatch(keyboardActions.handleChangeValidate('full'));
    };
  }, [dispatch]);


  useEffect(() => {
    if (routeType === 'word') {
      if (WORDS[+test - 1].words.length === currentIndex) {
        dispatch(exerciseActions.setTestStage(StageTestExercise.RESULT));
      }
    } else if (combinedString.length === currentIndex) {
      dispatch(exerciseActions.setTestStage(StageTestExercise.RESULT));
    }
  }, [currentIndex, dispatch]);
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
              letters={letters}
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
