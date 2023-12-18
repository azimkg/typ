import React, { useState, useEffect } from 'react';
import { getStageTestTime } from 'models/exercise/selectors/exerciseSelectors';
import { exerciseActions } from 'models/exercise/slice/exerciseSlice';
import { useDispatch, useSelector } from 'react-redux';
import cls from './progressTimer.module.css';


interface ProgressTimerProps {
  time: number
}

const ProgressTimer: React.FC<ProgressTimerProps> = ({ time }) => {
  const dispatch = useDispatch();
  const progress = useSelector(getStageTestTime);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(exerciseActions.updateTimer(progress + (100 / time)));
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch, progress]);

  return (
    <div className={cls.template}>
      <div className={cls.block}>
        <div
          style={{
            width: `${progress}%`,
            height: '4px',
            backgroundColor: 'var(--col-m-primary)',
            transition: 'width 1s',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressTimer;
