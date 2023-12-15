'use client';
import { FC, ReactNode, useEffect } from 'react';
import { store } from 'configs/store/store';
import { setCookie } from 'cookies-next';
import i18nConfig from 'i18nConfig';
import { useCurrentLocale } from 'next-i18n-router/client';
import { Provider } from 'react-redux';


interface IStoreProvider {
  children: ReactNode
}
const StoreProvider: FC<IStoreProvider> = ({ children }) => {
  const locale = useCurrentLocale(i18nConfig);
  useEffect(() => {
    setCookie('_lang', locale);
  }, [ locale ]);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
