import { useCallback } from 'react';
import { setCookie } from 'cookies-next';
import i18nConfig from 'i18nConfig';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';


export const useChangeLn = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const currentPathname = usePathname();
  return useCallback((newLn: string) => {
    setCookie('_lang', newLn);
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      window.location.href = '/' + newLn + currentPathname;
    } else {
      window.location.href = currentPathname.replace(`/${currentLocale}`, `/${newLn}`);
    }
  }, [ currentLocale, currentPathname ]);
};
