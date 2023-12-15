import { FC } from 'react';
import Progress from 'common/progress/Progress';
import BlockContent from 'components/LessonsType/blockContent/BlockConten';
import { Education } from 'helpers/lessonData';
import { TFunction } from 'i18next';
import cls from './lessonsContent.module.css';


interface ILessonsContent {
  education: Education['basic'],
  t: TFunction,
}
const LessonsContent: FC<ILessonsContent> = ({ t, education }) => {
  return (
    <div className={cls.template}>
      <Progress className={cls.progress} percent={education.progress} height={40} withPercent />
      {education.blocks.map((item) => <BlockContent key={item.id} data={item} t={t} />)}
    </div>
  );
};

export default LessonsContent;
