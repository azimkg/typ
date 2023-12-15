import Container from 'common/container/Container';
import Dashboard from 'components/dashboard/Dashboard';
import Header from 'components/header/Header';
import ClientProviders from 'components/providers/clientProviders/ClientProviders';
import initTranslations from 'configs/i18n/i18n';
import { ParamsLocale } from 'types/commonTypes';
import cls from './page.module.css';


export default async function Profile( { params: { locale } }: ParamsLocale){
  const { t } = await initTranslations(locale);
  return (
    <div className={cls.mt}>
      <Header t={t} locale={locale} />
      <Container>
        <ClientProviders>
          <Dashboard/>
        </ClientProviders>
      </Container>
    </div>
  );
}
