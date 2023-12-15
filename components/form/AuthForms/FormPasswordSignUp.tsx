import Button from 'common/button/Button';
import Input from 'common/input/input';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { userActions } from 'models/user/slice/userSlice';
import { ModalAuthStage } from 'models/user/types/userTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import cls from './Authorization.module.css';


interface FormData {
  password: string;
}

const FormPasswordSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(userActions.handleChangeStageAuth(ModalAuthStage.REGISTER));
  };
  const { t } = useTranslation();
  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className={cls.title}>{t('authModal.auth-title')}</p>
        <Input
          {...register('password', { required: `${t('header.input.required-field')}` })}
          placeholder={t('authModal.placeholder.password')}
          type="password"
          error={errors.password?.message}
        />
      </div>
      <div>
        <p className={cls.textPolitic}>{t('authModal.sign-text2')}</p>
        <Button type='submit' width={'100%'}>{t('button.forward')}</Button>
      </div>
    </form >
  );
};

export default FormPasswordSignUp;
