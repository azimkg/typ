import { FC } from 'react';
import Keyboard from 'common/keyboard/Keyboard';
import ClientProviders from 'components/providers/clientProviders/ClientProviders';
import { TFunction } from 'i18next';
import cls from './themepreview.module.css';


interface IThemePreviewProps {
  t: TFunction
}
const ThemePreview: FC<IThemePreviewProps> = ({ t }) => {
  return (
    <div className={cls.template}>
      <h1>{t('themes-page.title')}</h1>
      <div>
        <p> <span className={cls.correct}>История ж<span className={cls.error}>и</span>з</span>ни американского физика Роберта Оппенгеймера, который стоял во главе первых разработок ядерного оружия.</p>
        <ClientProviders>
          <Keyboard/>
        </ClientProviders>
      </div>
    </div>
  );
};

export default ThemePreview;
