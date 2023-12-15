import React, { FC, useEffect } from 'react';
import Enter from '@icons/newLine.svg';
import classes from 'classnames';
import cls from './exersiceForTests.module.css';


interface TimeTestProps {
  letters: string[]
  cumulativeIndex: number
  errorIndexes: number[]
  currentIndex: number
  anchor: any
}
const TimeTest: FC<TimeTestProps> = ({ letters, cumulativeIndex, errorIndexes, currentIndex, anchor }) => {
  return (
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
                    { [cls.every]: currentIndex < cumulativeIndex },
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
  );
};

export default TimeTest;