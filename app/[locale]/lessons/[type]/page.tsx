import Container from 'common/container/Container';
import MainSectionProgress from 'common/mainSectionProgress/MainSectionProgress';
import Sidebar from 'common/sidebar/Sidebar';
import Header from 'components/header/Header';
import LessonsContent from 'components/LessonsType/lessonsContent/LessonsContent';
import initTranslations from 'configs/i18n/i18n';
import { courseTypes, trainingCourseList } from 'helpers/coursesList';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchCourseProgress } from 'services/serverServices/serverServices';
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
  if (!courseTypes.includes(type)) {
    redirect(`/${locale}/404`);
  }
  const courseTraining = cookies().get('course-training')?.value || trainingCourseList[0];
  const data = await fetchCourseProgress(type, courseTraining);
  return (
    <main className={cls.page}>
      <div className={cls.top}>
        <Header t={t} locale={locale} />
        <MainSectionProgress activeCourse={courseTraining} t={t} courseData={data.result} />
      </div>
      <Container>
        <div className={cls.content}>
          <Sidebar t={t} />
          <LessonsContent education={data.education.basic} t={t} />
        </div>
      </Container>
    </main>
  );
}
