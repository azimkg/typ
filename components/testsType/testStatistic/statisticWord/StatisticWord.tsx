import React from 'react';
import cls from '../testStastic.module.css';


const StatisticWord = () => {
  return (
    <div className={cls.template}>
      <div>
        <p>10 слов</p>
        <h3>47wpm</h3>
        <span>92%</span>
      </div>
      <div>
        <p>20 слов</p>
        <h3>-</h3>
        <span>-</span>
      </div>
      <div>
        <p>50 слов</p>
        <h3>-</h3>
        <span>-</span>
      </div>
      <div>
        <p>100 слов</p>
        <h3>-</h3>
        <span>-</span>
      </div>
    </div>
  );
};

export default StatisticWord;