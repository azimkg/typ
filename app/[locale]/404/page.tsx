import React from 'react';
import AppLink from 'common/appLink/AppLink';
import Button from 'common/button/Button';
import KeyboardButton from 'common/keyboardButton/KeyboardButton';
import Header from 'components/header/Header';
import ClientProviders from 'components/providers/clientProviders/ClientProviders';
import initTranslations from 'configs/i18n/i18n';
import { ParamsLocale } from 'types/commonTypes';
import cls from './PageNotFound.module.css';


const PageNotFound = async ({ params: { locale } }: ParamsLocale) => {
  const { t } = await initTranslations(locale);
  return (
    <>
      <Header t={t} locale={locale}/>
      <ClientProviders>
        <div className={cls.pnf_main}>
          <h1 className={cls.pnf_h1}>Такой страницы не существует</h1>
          <div className={cls.pnf_keyboard}>
            <div className={cls.keyboard_btns_group}>
              <KeyboardButton value={'ё'} />
              <KeyboardButton value={'1'} />
              <KeyboardButton value={'2'} />
              <KeyboardButton value={'3'} />
              <KeyboardButton value={'4'} className={cls.red} />
              <KeyboardButton value={'0'} className={cls.red} />
              <KeyboardButton value={'4'} className={cls.red} />
              <KeyboardButton value={'7'} />
              <KeyboardButton value={'8'} />
              <KeyboardButton value={'9'} />
              <KeyboardButton value={'0'} />
              <KeyboardButton value={'_'} value2="-" />
              <KeyboardButton value={'='} value2="+" />
              <KeyboardButton
                value={''}
                width="84px"
                value2="backspace"
                location="center_bottom"
              />
            </div>
            <div className={cls.keyboard_btns_group}>
              <KeyboardButton value={''} width="84px" value2="tab" location="start" />
              <KeyboardButton value={'о'} className={cls.red} />
              <KeyboardButton value={'ш'} className={cls.red} />
              <KeyboardButton value={'и'} className={cls.red} />
              <KeyboardButton value={'б'} className={cls.red} />
              <KeyboardButton value={'к'} className={cls.red} />
              <KeyboardButton value={'а'} className={cls.red} />
              <KeyboardButton value={'г'} />
              <KeyboardButton value={'ш'} />
              <KeyboardButton value={'щ'} />
              <KeyboardButton value={'з'} />
              <KeyboardButton value={'х'} />
              <KeyboardButton value={'ъ'} />
              <KeyboardButton value={'\\'} value2="/" />
            </div>
            <div className={cls.keyboard_btns_group}>
              <KeyboardButton value={''} width="100px" value2="caps" location="start" />
              <KeyboardButton value={'ф'} />
              <KeyboardButton value={'ы'} />
              <KeyboardButton value={'в'} />
              <KeyboardButton value={'а'} />
              <KeyboardButton value={'п'} />
              <KeyboardButton value={'р'} />
              <KeyboardButton value={'о'} />
              <KeyboardButton value={'л'} />
              <KeyboardButton value={'д'} />
              <KeyboardButton value={'ж'} />
              <KeyboardButton value={'э'} />
              <KeyboardButton
                value={''}
                width="108px"
                value2="enter"
                location="end"
              />
            </div>
            <div className={cls.keyboard_btns_group}>
              <KeyboardButton
                value={''}
                width="136px"
                value2="shift"
                location="start"
              />
              <KeyboardButton value={'я'} />
              <KeyboardButton value={'ч'} />
              <KeyboardButton value={'с'} />
              <KeyboardButton value={'м'} />
              <KeyboardButton value={'и'} />
              <KeyboardButton value={'т'} />
              <KeyboardButton value={'ь'} />
              <KeyboardButton value={'б'} />
              <KeyboardButton value={'ю'} />
              <KeyboardButton value={'.'} value2="," />
              <KeyboardButton
                value={''}
                width="136px"
                value2="shift"
                location="end"
              />
            </div>
            <div className={cls.keyboard_btns_group}>
              <KeyboardButton
                value={''}
                width="70px"
                value2="ctrl"
                location="start"
              />
              <KeyboardButton
                value={''}
                width="70px"
              />
              <KeyboardButton
                value={''}
                width="70px"
                value2="alt"
                location="start"
              />
              <KeyboardButton
                value={''}
                width="472px"
              />
              <KeyboardButton
                value={''}
                width="70px"
                value2="alt"
                location="end"
              />
              <KeyboardButton
                value={''}
                width="70px"
              />
              <KeyboardButton
                value={''}
                width="70px"
                value2="ctrl"
                location="end"
              />
            </div>
          </div>
          <AppLink href={'/'} className={cls.route}>
            <Button>{t('themes-page.route.main')}</Button>
          </AppLink>
        </div>
      </ClientProviders>
    </>
  );
};

export default PageNotFound;
