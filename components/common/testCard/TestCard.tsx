import React, { FC } from 'react';
import ClientProviders from 'components/providers/clientProviders/ClientProviders';
import { TFunction } from 'i18next';
import TestButtonCard from './testButtonCard/TestButtonCard';
import cls from './testCard.module.css';
import TestOfTime from './testOfTime/TesOfTime';
import TestOfWords from './testOfWords/TestOfWords';


export type Test = {
  id: number
  activeTest: number
  title: string
  type: 'time' | 'word'
}

interface TestCardProps {
  type: 'time' | 'word'
  t: TFunction,
  test: Test
}

const TestCard: FC<TestCardProps> = ({
  type, t, test
}) => {
  return (
    <div className={cls.template}>
      {type === 'time' ? <TestOfTime title={test.title} /> : <TestOfWords title={test.title} />}
      <ClientProviders>
        <TestButtonCard activeExercise={test.activeTest} />
      </ClientProviders>
    </div>
  );
};

export default TestCard;