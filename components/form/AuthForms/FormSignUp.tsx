import React from 'react';
import Button from 'common/button/Button';
import Input from 'common/input/input';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { userActions } from 'models/user/slice/userSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import cls from './Authorization.module.css';


interface FormData {
    name: string;
    sureName:string
}

const  FormSignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(userActions.onCreateUser());
  };

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className={cls.title}>{t('authModal.auth-title')}</p>
        <div className={cls.inputs_flex}>
          <Input
            {...register('name', {
              required: `${t('header.input.required-field')}`,
            })}
            placeholder={t('authModal.placeholder.name')}
            error={errors.name?.message}
          />
          <Input
            {...register('sureName', {
              required: `${t('header.input.required-field')}`,
            })}
            placeholder={t('authModal.placeholder.sureName')}
            error={errors.sureName?.message}
          />
        </div>
        <p className={cls.textPolitic}>{t('authModal.sign-text3')}</p>
      </div>
      <div>
        <p className={cls.textPolitic}>{t('authModal.sign-text2')}</p>
        <Button type='submit' width={'100%'}>{t('button.create')}
        </Button>
      </div>
    </form>
  );
};

export default  FormSignUp;
