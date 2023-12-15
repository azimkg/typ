'use client';
import { FC, ReactNode, useMemo } from 'react';
import TranslationsProvider from 'components/providers/languageProvider/TranslationsProvider';
import StoreProvider from 'components/providers/storeProvider/StoreProvider';
import { getCookie } from 'cookies-next';
import { useParams } from 'next/navigation';


interface IClientProvidersProps {
  children: ReactNode
}
const ClientProviders: FC<IClientProvidersProps> = ({ children }) => {
  const { locale: routeLocale } = useParams<{ locale: string }>();
  const locale = useMemo(() => routeLocale ||  getCookie('_lang')?.toString() || 'ru', [ routeLocale ]);
  return (
    <div>
      <TranslationsProvider locale={locale}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </TranslationsProvider>
    </div>
  );
};

export default ClientProviders;
