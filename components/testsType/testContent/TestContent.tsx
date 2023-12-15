import { FC } from 'react';
import { testTypes } from 'helpers/coursesList';
import { EducationTest } from 'helpers/lessonData';
import { TFunction } from 'i18next';
import TestBlockContent from '../testBlockContent/TestBlockContent';
import TestStatistic from '../testStatistic/TestStatistic';
import cls from './testContent.module.css';


interface ITestContent {
  educations: EducationTest['time'],
  t: TFunction,
  type: string
}
const TestContent: FC<ITestContent> = ({ t, educations, type }) => {
  return (
    <div className={cls.template}>
      <TestStatistic type={type} />
      {educations.blocks.map((item) => <TestBlockContent key={item.id} data={item} t={t} />)}
    </div>
  );
};

export default TestContent;
