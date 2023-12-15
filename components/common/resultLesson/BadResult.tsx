import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../button/Button';
import cls from './resultLesson.module.css';


interface BadResultProps{
  repeatAction:()=>void
}

const BadResult: FC<BadResultProps> = ({ repeatAction }) => {
  const { t } = useTranslation();


  return (
    <div className={cls.bad_result}>
      <h1>{t('result.bad-result-title')}</h1>
      <p>{t('result.bad-result-text')}</p>
      <Button className={cls.btn_bad} onClick={repeatAction}>
        {t('button.repeat')} 
        <span>(R)</span>
      </Button>
    </div>
  );
};

export default BadResult;