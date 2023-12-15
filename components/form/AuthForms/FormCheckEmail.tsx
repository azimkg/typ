import Button from 'common/button/Button';
import Input from 'common/input/input';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { userActions } from 'models/user/slice/userSlice';
import { ModalAuthStage } from 'models/user/types/userTypes';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import cls from './Authorization.module.css';


interface FormData {
    password: string
}

const FormCheckEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const onSubmit = (data: FormData) => {
    dispatch(userActions.handleChangeStageAuth(ModalAuthStage.CREATE_NEW_PASSWORD));
  };

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={cls.titel}>{t('authModal.pass-recTitle')}</p>
      <div>
        <Input
          type={'email'}
          {...register('password', {
            required: `${t('header.input.required-field')}`,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: `${t('header.input.error-signIn')}`,
            }
          })}
          placeholder="Email"
          error={errors.password?.message}
        />
        <p className={cls.textPolitic}>{t('authModal.rec-mess')}</p>
      </div>
      <div className={cls.btnBlock}>
        <Button type='submit'>{t('button.send')}</Button>
      </div>
    </form>
  );
};

export default FormCheckEmail;
