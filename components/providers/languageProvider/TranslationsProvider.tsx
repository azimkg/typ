'use client';
import { ReactNode, useEffect, useState } from 'react';
import initTranslations from 'configs/i18n/i18n';
import { i18n as i18nInterface } from 'i18next';
import { I18nextProvider } from 'react-i18next';


let i18n: i18nInterface;

export default function TranslationsProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const [ instance, setInstance ] = useState(i18n);

  useEffect(() => {
    const init = async () => {
      if (!i18n) {
        const newInstance = await initTranslations(locale);
        i18n = newInstance;
        setInstance(newInstance);
      } else {
        if (i18n.language !== locale) {
          i18n.changeLanguage(locale);
        }
      }
    };

    init();
  }, [ locale ]);
  if (!instance) {
    return null;
  }
  return (
    <I18nextProvider i18n={instance}>
      {children}
    </I18nextProvider>
  );
}
