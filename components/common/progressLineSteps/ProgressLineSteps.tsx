import { FC } from 'react';
import classes from 'classnames';
import Progress from 'common/progress/Progress';
import cls from './progressLineSteps.module.css';


interface IProgressLineStepsProps {
  progress?: number;
  numSegments?: number;
  className?: string
}

const ProgressLineSteps: FC<IProgressLineStepsProps> = ({ progress=0, numSegments = 8, className }) => {

  return (
    <div className={classes(cls.progress_list, className ?? '')} >
      {new Array(numSegments).fill(0).map((_, index) => {
        const itemPercent = (numSegments * progress - 100 * index) / 100;
        const segmentPercent = itemPercent > 0 ? itemPercent * 100 : 0;
        return <Progress key={index} withText={false} height={12} percent={segmentPercent} />;
      })}
    </div>
  );
};

export default ProgressLineSteps;
