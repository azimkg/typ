import { FC } from 'react';
import classes from 'classnames';
import { TFunction } from 'i18next';
import { Lesson } from '../LessonCard';
import cls from '../lessonCard.module.css';


type LessonResultInfoProps = {
  type: 'test' | 'default'
  progress?: number
  t: TFunction
  result: {
    speed?: number
    accuracy?: number
    spendTime?: string
    attempts?: number
    fastest?: number
  }
}

const RESULT_LIST = new Map<string, Array<[(keyof Lesson['results']), string]>>([
  ['test', [['attempts', ''], ['fastest', 'wpm'], ['speed', 'wpm'], ['accuracy', '%']]],
  ['default', [['speed', 'wpm'], ['accuracy', '%'], ['spendTime', '']]],
]);

const LessonResultInfo: FC<LessonResultInfoProps> = (props) => {
  const {
    t,
    type,
    progress,
    result
  } = props;
  const resultKeys = RESULT_LIST.get(type)!;
  return (
    <div className={classes(cls.info_block,
      { [cls.info_block_white]: progress === 100 },
      { [cls.info_block_hidden]: progress === 0 },
    )}>
      {
        resultKeys.map(([key, unit], i) =>
          <p key={i}>{t(`lesson-card.${type}.${key}`)}: {result[key]} {unit}</p>)
      }
    </div>
  );
};

export default LessonResultInfo;
