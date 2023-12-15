import React, { FC } from 'react';
import StatisticTime from './statisticTime/StatisticTime';
import StatisticWord from './statisticWord/StatisticWord';
import cls from './testStastic.module.css';


interface TestStatisticProps {
  type: string
}


const TestStatistic: FC<TestStatisticProps> = ({ type }) => {

  return (
    <div>
      <h2 className={cls.h2}>Ваши лучшие результаты</h2>
      {
        type === 'time' ?
          <StatisticTime /> : <StatisticWord />
      }
    </div>
  );
};

export default TestStatistic;