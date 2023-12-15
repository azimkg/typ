import { FC } from 'react';
import ThemeCard, { IThemeCardProps } from 'components/themes/themeCard/ThemeCard';
import { TFunction } from 'i18next';
import cls from './themeList.module.css';


interface IThemeList {
  t: TFunction
}
const ThemeList: FC<IThemeList> = ({ t }) => {
  const themeList: IThemeCardProps[]  = [
    {
      name: t('themes-page.theme.default'),
      colors: [ 'grey', 'blue' ],
      theme: 'white'
    },
    {
      name: t('themes-page.theme.dark'),
      colors: [ 'grey', 'blue' ],
      theme: 'dark'
    },
    {
      name: t('themes-page.theme.green'),
      colors: [ 'green', 'yellow' ],
      theme: 'green'
    },
    {
      name: t('themes-page.theme.blue'),
      colors: [ 'aqua', 'pink' ],
      theme: 'blue'
    }
  ];
  return (
    <div className={cls.list}>
      {themeList.map((theme,) =>
        <ThemeCard
          key={theme.theme}
          theme={theme.theme}
          name={theme.name}
          colors={theme.colors}
        />)}
    </div>
  );
};

export default ThemeList;
