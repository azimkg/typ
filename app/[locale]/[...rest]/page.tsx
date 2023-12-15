import { redirect } from 'next/navigation';
import { ParamsLocale } from 'types/commonTypes';


const CatchPage = ({ params }: ParamsLocale) => {
  const { locale } = params;
  redirect(locale !== 'en' ?`/${locale}/404`: '/404');
};
export default CatchPage;
