'use client';
import { FC, useMemo, useState } from 'react';
import Button from 'common/button/Button';
import Select, { OptionType } from 'common/select/Select';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useChangeLn } from 'hooks/useChangeLn';
import i18nConfig from 'i18nConfig';
import { getLanguageKeyboard } from 'models/keyboard/selectors/keyboardSelectors';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useCurrentLocale } from 'next-i18n-router/client';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './languageChange.module.css';


interface ILanguageChangeProps {
  onClose: () => void
}
const LanguageChange: FC<ILanguageChangeProps> = ({ onClose }) => {
  const changeLocale = useChangeLn();
  const { t } = useTranslation();
  const locale = useCurrentLocale(i18nConfig);
  const lanKeyboard = useSelector(getLanguageKeyboard);

  const dispatch = useAppDispatch();

  const optionLn = useMemo<OptionType[]>(() => [
    {
      value: 'ru',
      label: t('language.ru')
    },
    {
      value: 'en',
      label: t('language.en')
    }
  ], [ t ]);
  const optionKeyboard = useMemo<OptionType[]>(() => [
    {
      value: 'ru',
      label: t('keyboard.ru')
    },
    {
      value: 'en',
      label: t('keyboard.en')
    }
  ], [ t ]);

  const [ values, setValues ] = useState(() => {
    const ln = optionLn.find((item) => item.value === locale);
    const lnKeyboard = optionKeyboard.find((item) => item.value === lanKeyboard);
    return { ln, lnKeyboard };
  });
  const handleChangeLanguages = () => {
    const { ln, lnKeyboard } = values;
    dispatch(keyboardActions.setKeyboardLn(lnKeyboard!.value));
    if(ln!.value !== locale) {
      changeLocale(ln!.value );
    }
    onClose();
  };
  return (
    <div className={cls.change}>
      <p>{t('header.dropdown.title')}</p>
      <div>
        <p>{t('header.dropdown.site-lan')}</p>
        <Select
          options={optionLn}
          value={values.ln}
          onChange={(newValue) =>
            setValues((prev) => ({ ...prev, ln: newValue! }))}
        />
      </div>
      <div>
        <p>{t('header.dropdown.keyboard-lan')}</p>
        <Select
          options={optionKeyboard}
          value={values.lnKeyboard}
          onChange={(newValue) =>
            setValues((prev) => ({ ...prev, lnKeyboard: newValue! }))}
        />
      </div>
      <div className={cls.action}>
        <Button white onClick={onClose}>{t('button.cancel')}</Button>
        <Button onClick={handleChangeLanguages}>{t('button.apply')}</Button>
      </div>
    </div>
  );
};

export default LanguageChange;
