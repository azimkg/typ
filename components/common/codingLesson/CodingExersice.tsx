'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Enter from '@icons/newLine.svg';
import classes from 'classnames';
import { useCodeHighlight } from 'hooks/useCodeHighlight';
import { exerciseActions } from 'models/exercise/slice/exerciseSlice';
import { StageExercise } from 'models/exercise/types/exerciseSchema';
import { getErrorIndexes, getNextIndex } from 'models/keyboard/selectors/keyboardSelectors';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useDispatch, useSelector } from 'react-redux';
import Keyboard from '../keyboard/Keyboard';
import cls from './codingLesson.module.css';


const letters = ['function foo() {', '    bar();', '}'];
const combinedString = letters.join('\n');
const CodingExersice: React.FC = () => {
  const dispatch = useDispatch();
  const errorIndexes = useSelector(getErrorIndexes);
  const currentIndex = useSelector(getNextIndex);
  const anchor = useRef<HTMLDivElement>(null);
  let cumulativeIndex = 0;

  const highlight = useCodeHighlight(letters.join('\n'), 'javascript');
  // eslint-disable-next-line no-undef
  const changeObserver: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach(entry => {
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
    dispatch(keyboardActions.setCurrentLetter(combinedString));
    dispatch(keyboardActions.handleChangeValidate('half'));
    return () => {
      dispatch(keyboardActions.handleChangeValidate('full'));
    }
  }, [dispatch]);

  useEffect(() => {
    if (combinedString.length === currentIndex) {
      dispatch(exerciseActions.setStage(StageExercise.RESULT));
    }
  }, [currentIndex, dispatch]);

  return (
    <div className={cls.main_block}>
      <div className={cls.container}>
        {letters.map((line, lineIndex) => {
          let iconIndex = cumulativeIndex;
          return (
            <div key={lineIndex} className={classes(cls.line)} >
              {line.split('').map((letter, letIndex) => {
                cumulativeIndex += 1;
                return (
                  <div
                    ref={currentIndex === cumulativeIndex - 1 ? anchor : null}
                    key={cumulativeIndex}
                    className={classes(
                      cls.newletter_box,
                      { [cls.error]: errorIndexes.includes(cumulativeIndex - 1) },
                      { [cls.success]: currentIndex > cumulativeIndex - 1 },
                      highlight.getCharacterClasses(lineIndex, letIndex)
                    )}
                  >
                    <div className={classes({ [cls.border]: currentIndex === cumulativeIndex - 1 })}></div>
                    <p>{letter}</p>
                  </div>
                );
              })}
              {lineIndex !== letters.length - 1 && (
                <>
                  <Enter key={`icon_${iconIndex}`} className={classes(cls.icon_enter, { [cls.icon]: currentIndex < cumulativeIndex + 1 })} />
                  <p className={cls.hidden_i}>{cumulativeIndex += 1}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
      <Keyboard isDelete={true} />
    </div>
  );
};

export default CodingExersice;
