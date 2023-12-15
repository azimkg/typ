'use client';
import Avatar from '@icons/avatar-icon.svg';
import AppLink from 'common/appLink/AppLink';
import Button from 'common/button/Button';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getUser } from 'models/user/selectors/userSelector';
import { userActions } from 'models/user/slice/userSlice';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './accountLink.module.css';


const AccountLink = () => {
  const user = useSelector(getUser);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const handleOpenModal = () => {
    dispatch(userActions.handleChangeModalAuth(true));
  };
  return (
    <>
      {
        user
          ? <AppLink className={cls.template} href={'/profile'}>
            <Avatar />
            <span>{user.fullName}</span>
          </AppLink>
          : <>
            <Button onClick={handleOpenModal}>
              {t('button.sign-in')}
            </Button>
          </>
      }
    </>
  );
};

export default AccountLink;
