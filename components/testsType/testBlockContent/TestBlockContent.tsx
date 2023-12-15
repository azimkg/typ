import { FC } from 'react';
import TestCard from 'components/common/testCard/TestCard';
// eslint-disable-next-line import/namespace
import { Tests } from 'helpers/lessonData';
import { TFunction } from 'i18next';
import cls from './testBlockContent.module.css';


interface ITestBlockContent {
  data: Tests
  t: TFunction,
}
const TestBlockContent: FC<ITestBlockContent> = ({ data, t }) => {
  return (
    <div className={cls.template}>
      <h3>{data.name}</h3>
      {
        data.tests.map((test) => <TestCard key={test.id} t={t} test={test} type={test.type} />)
      }
    </div>
  );
};

export default TestBlockContent;
