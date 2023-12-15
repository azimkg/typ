import { FC } from 'react';
import classes from 'classnames';
import Icon from 'common/icon/Icon';
import { iconPath } from 'common/icon/types';
import cls from 'common/lessonCard/lessonCard.module.css';


type LessonCardRatingProps = {
  type: 'test' | 'default'
  progress?: number
  total?: number
  currenTask?: number
  timeTest?: string

}
const LessonCardRating: FC<LessonCardRatingProps> = ({
  type,
  progress,
  currenTask,
  total,
  timeTest
}) => {
  if (type === 'default') {
    return (
      <div className={classes(cls.block_rating, { [cls.hidden]: progress === 0 })}>
        <Icon pathIcon={iconPath.START_ICON} />
        <h4 className={cls.name_lesson}>{total}/{currenTask}</h4>
      </div>
    );
  }
  return (
    <div className={cls.block_rating}>
      <Icon pathIcon={iconPath.CLOCK_ICON} />
      <h4 className={cls.name_lesson}>{timeTest}</h4>
    </div>
  );
};

export default LessonCardRating;
