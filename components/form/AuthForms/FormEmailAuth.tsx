import Button from 'common/button/Button';
import Input from 'common/input/input';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getUsers } from 'models/user/selectors/userSelector';
import { userActions } from 'models/user/slice/userSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './Authorization.module.css';


interface FormData {
  email: string;
}


const FormEmailAuth = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const users = useSelector(getUsers);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(userActions.onHasEmail(data.email));
  };

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={cls.title}>{t('authModal.sign-title')}</p>
      <Input
        {...register('email', {
          required: `${t('header.input.required-field')}`,
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: `${t('header.input.error-signIn')}`,
          }
        })}
        error={errors.email?.message}
        placeholder="Email"
      />
      <p className={cls.textPolitic}>{t('authModal.sign-text1')}</p>
      <div>
        <p className={cls.textPolitic}>{t('authModal.sign-text2')}</p>
        <Button type='submit' width={'100%'}>{ t('button.sign-in')}</Button>
      </div>
    </form>
  );
};

export default FormEmailAuth;
