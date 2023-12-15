import React from 'react';
import cls from '../testStastic.module.css';


const StatisticTime = () => {
  return (
    <div className={cls.template}>
      <div>
        <p>15 секунд</p>
        <h3>47wpm</h3>
        <span>92%</span>
      </div>
      <div>
        <p>30 секунд</p>
        <h3>-</h3>
        <span>-</span>
      </div>
      <div>
        <p>60 секунд</p>
        <h3>-</h3>
        <span>-</span>
      </div>
      <div>
        <p>120 секунд</p>
        <h3>-</h3>
        <span>-</span>
      </div>
    </div>
  );
};

export default StatisticTime;