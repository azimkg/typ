'use client';
import React, { useState } from 'react';
import AppLink from 'common/appLink/AppLink';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { userActions } from 'models/user/slice/userSlice';
import { useTranslation } from 'react-i18next';
import cls from './Dashboard.module.css';
import PasswordContent from './PasswordContent';
import ProfileContent from './ProfileContent';


const Dashboard = () => {
  const { t } = useTranslation();
  const [currentContent, setCurrentContent] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleProfile = () => {
    setCurrentContent(false);
  };

  const handlePassword = () => {
    setCurrentContent(true);
  };
  const handleLogOut = () => {
    dispatch(userActions.handleLogout());
  };
  return (
    <div className={cls.flexBlock}>
      <div className={cls.dashBody}>
        <div className={cls.dashBlock}>
          <div className={currentContent ? cls.litag : cls.activeBlue} onClick={handleProfile}>{t('profile.profileTitle')}</div>
          <div className={currentContent ? cls.activeBlue : cls.litag} onClick={handlePassword}>{t('profile.changePass')}</div>
          <div className={cls.litag} >{t('profile.certificate')}</div>
        </div>
        <AppLink className={cls.litagOut} href={'/'} onClick={handleLogOut}>
          {t('profile.out')}
        </AppLink>
      </div>
      {currentContent ? <PasswordContent /> : <ProfileContent />}
    </div>
  );
};

export default Dashboard;
