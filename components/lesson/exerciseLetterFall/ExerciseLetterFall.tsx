'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from 'classnames';
import Keyboard from 'common/keyboard/Keyboard';
import SmallContainer from 'common/smallContainer/SmallContainer';
import { getErrorIndexes, getNextIndex } from 'models/keyboard/selectors/keyboardSelectors';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useDispatch, useSelector } from 'react-redux';
import cls from './exerciseLetterFall.module.css';


const coding = '[;.FcdAddlmcqwe';
const rootElement = document.documentElement;
const ExerciseLetterFall = () => {
  const container = useRef<HTMLDivElement>(null);
  const keyboard = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line no-undef
  const button = useRef<NodeListOf<HTMLButtonElement> | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const errorIndexes = useSelector(getErrorIndexes);
  const currentIndex = useSelector(getNextIndex);
  const anchor = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line no-undef
  const onChangeHashUrl: IntersectionObserverCallback = useCallback((entries) => {
    entries.forEach(entry => {
      const text = entry.target.innerHTML;
      const targetButton = Array.from(button.current!).find(
        (button) => {
          const buttonText = button.innerText.replace(/\n/g, '').toLowerCase();
          return buttonText.length < 3 && buttonText.includes(text.toLowerCase());
        }
      );
      if (targetButton) {
        const result = targetButton?.getBoundingClientRect()?.bottom - entry.boundingClientRect.bottom - 60;
        rootElement.style.setProperty('--main-lantern', `-${result}px`);
      }
      entry.target.scrollIntoView({ block: 'end' });
    });
  }, []);

  useEffect(() => {
    dispatch(keyboardActions.setCurrentLetter(coding));
    rootElement.style.setProperty('--main-lantern-width', '64px');
    button.current = keyboard.current!.querySelectorAll<HTMLButtonElement>('button');
    setLoading(false);
    return () => {
      rootElement.style.setProperty('--main-lantern', '0');
      rootElement.style.setProperty('--main-lantern-width', '0');
    };
  }, [dispatch]);

  useEffect(() => {
    let observer: IntersectionObserver;
    const ref = anchor.current;
    if (ref) {
      observer = new IntersectionObserver(onChangeHashUrl, { threshold: 1 });
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [onChangeHashUrl, currentIndex, loading]);

  const getCoordinate = useCallback((key: string) => {
    if (button.current) {
      const targetButton = Array.from(button.current).find(
        (button) => {
          const text = button.innerText.replace(/\n/g, '').toLowerCase();
          return text.length < 3 && text.includes(key.toLowerCase());
        }
      );
      const result = targetButton && targetButton.getBoundingClientRect()?.x - container.current!.getBoundingClientRect().x;
      return result || 0;
    }
    return 0;
  }, []);

  return (
    <SmallContainer>
      <div className={cls.template} ref={container}>
        {
          loading ? null : coding.split('').reverse().map((item, idx) => <div
            key={idx}
            className={classes(
              { [cls.current]: coding.length - currentIndex - 1 === idx },
              { [cls.success]: coding.length - currentIndex - 1 < idx },
              { [cls.error]: errorIndexes.includes(coding.length - idx - 1) },
              cls.line,
            )}
          >
            <p ref={coding.length - currentIndex - 1 === idx ? anchor : null} onClick={() => getCoordinate(item)} style={{ '--tranlate-x': `${getCoordinate(item)}px` } as React.CSSProperties}>
              {item}
            </p>
            <div className={classes(
              cls.bg,
              { [cls.bg_success]: coding.length - currentIndex - 1 < idx },
              { [cls.bg_current]: coding.length - currentIndex - 1 === idx },
              { [cls.bg_error]: errorIndexes.includes(coding.length - idx - 1) }
            )} />
          </div>)
        }
      </div>
      <div ref={keyboard}>
        <Keyboard />
      </div>
    </SmallContainer>
  );
};

export default ExerciseLetterFall;
