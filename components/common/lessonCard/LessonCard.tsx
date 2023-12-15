import { FC } from 'react';
import classes from 'classnames';
import ProgressLineSteps from 'common/progressLineSteps/ProgressLineSteps';
import ClientProviders from 'components/providers/clientProviders/ClientProviders';
import { TFunction } from 'i18next';
import ButtonCard from './buttonCard/ButtonCard';
import cls from './lessonCard.module.css';
import LessonCardProgress from './lessonCardPogress/LessonCardProgress';
import LessonCardRating from './lessonCardRating/LessonCardRating';
import LessonResultInfo from './lessonResultInfo/LessonResultInfo';


export type Lesson = {
  id: number
  title: string
  type?: 'test' | 'default'
  lessonNumber: number
  timeTest?: string
  totalStars?: number
  stars?: number,
  progress?: number
  exercisesCount: number,
  activeExercise: number,
  results: {
    speed?: number
    accuracy?: number
    spendTime?: string
    attempts?: number
    fastest?: number
  }
}
interface LessonCardProps {
  type?: 'test' | 'default'
  t: TFunction,
  lesson: Lesson
}

const LessonCard: FC<LessonCardProps> = ({ type = 'default', t, lesson }) => {
  return (
    <div className={classes(cls.lesson, { [cls.lesson_green]: lesson.progress === 100 })} key={lesson.id} >
      <div className={cls.lesson_block}>
        <div className={cls.less_block_flex}>
          <LessonCardProgress progress={lesson.progress} lessonNumber={lesson.lessonNumber} />
          <h4 className={cls.name_lesson}>{lesson.title}</h4>
        </div>
        <div className={cls.less_block_flex}>
          <LessonCardRating
            type={type}
            progress={lesson.progress}
            currenTask={lesson.stars}
            total={lesson.totalStars}
            timeTest={lesson.timeTest}
          />
          <ClientProviders>
            <ButtonCard progress={lesson.progress} type={type} activeExercise={lesson.activeExercise} />
          </ClientProviders>
        </div>
      </div>
      <LessonResultInfo type={type} progress={lesson.progress} t={t} result={lesson.results} />
      <ProgressLineSteps
        className={classes(
          { [cls.progress_hidden]: type !== 'default' },
          { [cls.progress_passed]: lesson.progress === 100 }
        )}
        progress={lesson.progress}
      />
    </div>
  );
};

export default LessonCard;
