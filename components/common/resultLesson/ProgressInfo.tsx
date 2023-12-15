import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './resultLesson.module.css';


interface ProgressInfoProps {
  speed: number
  time: number
  accuracy: number
}

const ProgressInfo: FC<ProgressInfoProps> = ({ speed, time, accuracy }) => {
  const { t } = useTranslation();
  return (
    <div className={cls.template}>
      <div>
        <span>{t('lesson-card.default.speed')}</span>
        <p>{speed}wpm</p>
      </div>
      <div>
        <span>{t('lesson-card.default.accuracy')}</span>
        <p>{accuracy}%</p>
      </div>
      <div>
        <span>{t('lesson-card.default.spendTime')}</span>
        <p>{time} сек</p>
      </div>
    </div>
  );
};

export default ProgressInfo;