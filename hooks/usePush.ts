import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';


export const usePush = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const route = useRouter();
  return (path: string) => route.push(`/${locale}/${path}`);
};
