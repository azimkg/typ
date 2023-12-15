import Button from 'common/button/Button';
import Input from 'common/input/input';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { userActions } from 'models/user/slice/userSlice';
import { ModalAuthStage } from 'models/user/types/userTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import cls from './Authorization.module.css';


interface FormData {
  password: string
}

const  FormCheckPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(userActions.onCheckPassword(data.password));
  };

  const handleOpenModal = () => {
    dispatch(userActions.handleChangeStageAuth(ModalAuthStage.FORGOT_PASSWORD));
  };

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={cls.title}>{t('authModal.sign-title')}</p>
      <Input
        {...register('password', {
          required: `${t('header.input.required-field')}`,
        })}
        type={'password'}
        error={errors.password?.message}
        placeholder="Пароль"
      />
      <div>
        <p className={cls.textPolitic}>{t('authModal.sign-text2')}</p>
        <div className={cls.btnBlock}>
          <Button type='submit' width={'174px'}>{ t('button.sign-in')}</Button>
          <Button type='button' onClick={handleOpenModal} white width={'210px'}>{t('button.forgot')}</Button>
        </div>
      </div>
    </form>
  );
};

export default  FormCheckPassword;
