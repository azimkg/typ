import Container from 'components/common/container/Container';
import Sidebar from 'components/common/sidebar/Sidebar';
import Header from 'components/header/Header';
import TestContent from 'components/testsType/testContent/TestContent';
import initTranslations from 'configs/i18n/i18n';
import { testTypes } from 'helpers/coursesList';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchTestProgress } from 'services/serverServices/serverServices';
import cls from './page.module.css';


interface Props {
  params: { locale: string, type: string }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.type,
  };
}

export default async function Home({ params: { locale, type } }: Props) {
  const { t } = await initTranslations(locale);
  if (!testTypes.includes(type)) {
    redirect(`/${locale}/404`);
  }

  const courseTraining: any = cookies().get('test-training')?.value;
  const data = await fetchTestProgress(type, courseTraining);

  return (
    <main>
      <Header t={t} locale={locale} />
      <Container>
        <div className={cls.content}>
          <Sidebar t={t} />
          <TestContent type={type} educations={type === 'time' ? data.educations.time : data.educations.word} t={t} />
        </div> 
      </Container>
    </main>
  );
}
