import React from 'react';
import Prem from '@icons/premium.svg';
import { useTranslation } from 'react-i18next';
import cls from './Dashboard.module.css';



const PremiumAcc = () => {
  const { t } = useTranslation();

  return (
    <div className={cls.prem}>
      <p className={cls.label}>{t('profile.premium.prem-text')}</p>
      <h2 className={cls.textPrem}>{t('profile.premium.prem-title')}</h2>
      <p className={cls.mainTextPrem}>{t('profile.premium.prem-day')}</p>
      <button className={cls.btn_prem}>
        <Prem/>
        {t('button.get')}
      </button>
    </div>
  );
};

export default PremiumAcc;
