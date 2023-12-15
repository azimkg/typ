import React from 'react';
import Button from 'common/button/Button';
import Input from 'common/input/input';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { userActions } from 'models/user/slice/userSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import cls from './Authorization.module.css';


interface FormData {
    password: string
    confirmPassword:string
}

const  FormPasswordRecovery = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(userActions.handleCreateNewPassword());
  };

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={cls.inputs}>
        <p className={cls.title}>{t('authModal.pass-recTitle')}</p>
        <Input
          type={'password'}
          className={cls.input_mb}
          {...register('password', {
            required: `${t('authModal.placeholder.newPass')}`,
          })}
          placeholder={t('authModal.placeholder.newPass')}
          error={errors.password?.message}
        />
        <Input
          type={'password'}
          {...register('confirmPassword', {
            required: `${t('authModal.placeholder.confPass')}`,
          })}
          placeholder={t('authModal.placeholder.confPass')}
          error={errors.confirmPassword?.message}
        />
      </div>
      <div className={cls.btnBlock}>
        <Button type='submit'>{t('button.forward')}</Button>
      </div>
    </form>
  );
};

export default  FormPasswordRecovery;
