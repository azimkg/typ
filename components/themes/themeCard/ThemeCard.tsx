'use client';
import { FC } from 'react';
import classes from 'classnames';
import { setCookie } from 'cookies-next';
import cls from './themeCard.module.css';


export type Color = 'grey' | 'blue' | 'aqua' | 'pink' | 'green' | 'yellow';
export type Theme = 'white' | 'dark' | 'green' | 'blue'
export interface IThemeCardProps {
  theme: Theme
  colors: [Color, Color]
  name: string
}
const ThemeCard: FC<IThemeCardProps> = (props) => {
  const {
    theme,
    colors,
    name
  } = props;
  const handleClick = () => {
    const body = document.querySelector('body');
    if(!body) return;
    body.className = theme;
    setCookie('theme', theme);
  };
  return (
    <div className={classes(cls.card, cls[`card_${theme}`])} onClick={handleClick}>
      <p>{name}</p>
      <div className={cls.lists}>
        {colors.map((item, idx) => <div key={idx} className={classes(cls.circle,cls[`circle_${item}`])} />)}
      </div>
    </div>
  );
};

export default ThemeCard;
