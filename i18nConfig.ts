import { Config } from 'next-i18n-router/dist/types';


const i18nConfig: Config  = {
  locales: [ 'en', 'ru' ],
  defaultLocale: 'ru',
  localeCookie: '_lang',
  prefixDefault: true,
  localeDetector: (request) => {
    return request.cookies.get('_lang')?.value || 'ru';
  },
  routingStrategy: 'dynamicSegment'
};

export default i18nConfig;
