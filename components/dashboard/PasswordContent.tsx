import Button from 'common/button/Button';
import Input from 'common/input/input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import cls from './Dashboard.module.css';


interface FormData {
    name: string;
    sureName: string
    email:string
}


const PasswordContent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { t } = useTranslation();


  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log( data );
  };

  return (
    <form className={cls.form}  onSubmit={handleSubmit(onSubmit)}>
      <div className={cls.template_password}>
        <h2 className={cls.textSet}>{t('profile.password')}</h2>
        <Input
          {...register('name', {
            required: `${t('authModal.placeholder.oldPass')}`,
          })}
          placeholder={t('authModal.placeholder.oldPassword')}
          error={errors.name?.message}
        />
        <Input
          {...register('sureName', {
            required: `${t('authModal.placeholder.newPassword')}`,
          })}
          placeholder={t('authModal.placeholder.newPassword2')}
          error={errors.sureName?.message}
        />
        <Input
          {...register('email', {
            required: `${t('authModal.placeholder.confirmPass')}`,
          })}
          placeholder= {t('authModal.placeholder.confirmPass')}
          error={errors.email?.message}
        />
        <Button className={cls.btn_mt} type='submit'>{t('button.change')}</Button>
      </div>
    </form>
  );
};

export default PasswordContent;
