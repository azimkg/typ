import React from 'react';
import Container from 'common/container/Container';
import Header from 'components/header/Header';
import ThemeList from 'components/themes/themeList/ThemeList';
import ThemePreview from 'components/themes/themePreview/ThemePreview';
import initTranslations from 'configs/i18n/i18n';
import { Metadata } from 'next';
import { ParamsLocale } from 'types/commonTypes';


export const metadata: Metadata = {
  title: 'theme change page',
  description: 'theme change page',
};

export default async function Themes ({ params: { locale } }: ParamsLocale) {
  const { t } = await initTranslations(locale);
  return (
    <>
      <Header t={t} locale={locale}/>
      <Container>
        <ThemeList t={t}/>
        <ThemePreview t={t}/>
      </Container>
    </>
  );
}
