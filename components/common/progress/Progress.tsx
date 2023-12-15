'use client';
import { FC, useMemo } from 'react';
import classes from 'classnames';
import { Line, Circle } from 'rc-progress';
import { ProgressProps } from 'rc-progress/es/interface';
import cls from './progress.module.css';


interface IProgressProps extends ProgressProps {
  height?: number
  radius?: number
  withPercent?: boolean
  type?: 'line' | 'circle'
  withText?: boolean
}

const CSS_VARS = {
  height: '--progress-height',
  radius: '--progress-radius'
};
const Progress: FC<IProgressProps> = (props) => {
  const {
    className,
    radius = 2,
    height = 12,
    percent,
    withPercent,
    type = 'line',
    withText = true,
    ...rest
  } = props;
  const ccVars = useMemo(() => ({
    [CSS_VARS.height]: `${height}px`,
    [CSS_VARS.radius]: `${radius}px`
  }), [height, radius]);
  const isChange = useMemo(() => (typeof percent === 'number') && (percent >= 49) && type === 'line', [percent, type]);
  return (
    <div
      className={classes(
        cls.progress,
        className ?? '',
        { [cls.text_percent]: withPercent },
        { [cls.progress_circle]: type === 'circle' && withPercent },
        { [cls.with_text]: withText },
      )}
      style={ccVars}
    >
      {
        type === 'line'
          ? <Line
            percent={percent}
            strokeLinecap='butt'
            {...rest}
          />
          : <Circle
            percent={percent}
            strokeLinecap='butt'
            {...rest}
          />
      }
      {/* {
        type === 'line'
          ? <Line
            percent={percent}
            strokeWidth={ percent === 0 ? 0.000001: 1}
            {...rest}
          />
          : <Circle
            percent={percent}
            {...rest}
          />
      } */}
      <span className={classes({ [cls.color_changed]: isChange })}>{percent}{withPercent ? '%' : ''}</span>
    </div>
  );
};

export default Progress;
