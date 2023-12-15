import React from 'react';
import Button from 'common/button/Button';
import Input from 'common/input/input';
import { getUser } from 'models/user/selectors/userSelector';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './Dashboard.module.css';
import PremiumAcc from './PremiumAcc';


interface FormData {
    name: string;
    sureName: string
    email:string
}

const ProfileContent = () => {
  const user = useSelector(getUser);
  const {
    register,
    handleSubmit,
    formState: { errors } } =
    useForm<FormData>({ defaultValues: { email: user?.email, name: user?.fullName, sureName: user?.fullName } });
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className={cls.form}>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.profBlock}>
          <h2 className={cls.textSet}>{t('profile.settings')}</h2>
          <div className={cls.authBlock}>
            <div className={cls.formSet}>
              <Input
                {...register('name', {
                  required: `${t('authModal.input.required-field')}`,
                })}
                label={t('authModal.placeholder.name')}
                error={errors.name?.message}
              />
              <Input
                {...register('sureName', {
                  required: `${t('authModal.input.required-field')}`,
                })}
                label={t('authModal.placeholder.sureName')}
                error={errors.sureName?.message}
              />
            </div>
          </div>
          <Input
            {...register('email', {
              required: `${t('authModal.input.required-field')}`,
            })}
            label={t('authModal.placeholder.mail')}
            error={errors.email?.message}
          />
        </div>
        <div>
          <div className={cls.btnWidPass}>
            <Button type='submit'>{t('button.save')}</Button>
          </div>
        </div>
      </form>
      <PremiumAcc/>
    </div>
  );
};

export default ProfileContent;
