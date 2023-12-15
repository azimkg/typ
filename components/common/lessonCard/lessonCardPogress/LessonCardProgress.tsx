import { FC } from 'react';
import Icon from 'common/icon/Icon';
import { iconPath } from 'common/icon/types';
import Progress from 'common/progress/Progress';
import cls from '../lessonCard.module.css';


type LessonCardProgressProps = {
  progress?: number
  lessonNumber: number
}
const LessonCardProgress: FC<LessonCardProgressProps> = ({ progress, lessonNumber }) => {
  if (progress === 100) {
    return <Icon pathIcon={iconPath.SUCCESS_ICON} />;
  }
  return (
    <div className={cls.progress_num}>
      <Progress type='circle' percent={progress} height={40} strokeWidth={6} trailWidth={6} withText={false} />
      <span>{lessonNumber}</span>
    </div>
  );
};

export default LessonCardProgress;
