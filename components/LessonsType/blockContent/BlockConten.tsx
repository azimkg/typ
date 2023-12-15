import { FC } from 'react';
import LessonCard from 'common/lessonCard/LessonCard';
import { Block } from 'helpers/lessonData';
import { TFunction } from 'i18next';
import cls from './blockContent.module.css';


interface IBlockContent {
  data: Block
  t: TFunction,
}
const BlockContent: FC<IBlockContent> = ({ data, t }) => {
  return (
    <div className={cls.template}>
      <h3>{data.name}</h3>
      {
        data.lessons.map((lesson) => <LessonCard key={lesson.id} t={t} lesson={lesson} type={lesson.type} />)
      }
    </div>
  );
};

export default BlockContent;
