'use client';
import classes from 'classnames';
import { getIsNotValidSettingKeyboard } from 'models/keyboard/selectors/keyboardSelectors';
import { useSelector } from 'react-redux';
import cls from './notificationSettings.module.css';


const NotificationSettings = () => {
  const isNotValid = useSelector(getIsNotValidSettingKeyboard);
  return (
    <div className={classes(cls.template, { [cls.template_show]: isNotValid })}>
      not valid
    </div>
  );
};

export default NotificationSettings;
