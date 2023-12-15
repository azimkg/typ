'use client';
import { useCallback, useEffect, useRef } from 'react';
import classes from 'classnames';
import SmallContainer from 'common/smallContainer/SmallContainer';
import { getErrorIndexes, getNextIndex } from 'models/keyboard/selectors/keyboardSelectors';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useDispatch, useSelector } from 'react-redux';
import Keyboard from '../keyboard/Keyboard';
import cls from './NewLetter.module.css';


const letters = 'a';
const NewLetter = () => {
  const dispatch = useDispatch();
  const errorIndexes = useSelector(getErrorIndexes);
  const currentIndex = useSelector(getNextIndex);
  const anchor = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line no-undef
  const onChangeHashUrl: IntersectionObserverCallback = useCallback((entries) => {
    entries.forEach(entry => {
      const {  left  } = entry.target.getBoundingClientRect();
      const {  left: leftCon } = container.current!.getBoundingClientRect();
      if (!entry.isIntersecting) {
        if(container.current) {
          let resul = left - leftCon - 94;
          container.current.style.transform = `translateX(-${resul}px)`;
        }
      }
    });
  }, [ ]);
  useEffect(() => {
    dispatch(keyboardActions.setCurrentLetter(letters.repeat(24)));
  }, [ dispatch ]);
  useEffect(() => {
    let observer: IntersectionObserver;
    const ref = anchor.current;
    if(ref) {
      observer = new IntersectionObserver(onChangeHashUrl, { threshold: 0.00001 });
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ onChangeHashUrl, currentIndex ]);
  return (
    <SmallContainer>
      <div className={cls.newletter_main} ref={container}>
        {
          letters.repeat(24).split('').map((letter, index) => (
            <div
              ref={currentIndex === index ? anchor: null}
              key={index}
              className={classes(
                cls.newletter_box,
                { [cls.start]: index === 0 },
                { [cls.error]: errorIndexes.includes(index) },
                { [`${cls.current} success`]: currentIndex === index },
                { [cls.success]: currentIndex > index },
                { [cls.every]: (index + 1) % 8 === 0 && index !== 0 },
              )}
            >
              <p>{letter}</p>
            </div>
          ))
        }
      </div>
      <Keyboard />
    </SmallContainer>
  );
};

export default NewLetter;
