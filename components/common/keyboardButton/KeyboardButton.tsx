'use client';
import { ButtonHTMLAttributes, useMemo } from 'react';
import classes from 'classnames';
import { getActiveKeyLeft, getActiveKeyRight } from 'models/keyboard/selectors/keyboardSelectors';
import { useSelector } from 'react-redux';
import cls from './KeyboardButton.module.css';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  className?: string;
  upperCase?: boolean;
  value: string;
  value2?: string;
  location?: 'start' | 'end' | 'default' | 'center_bottom';
  reverse?: boolean;
  keyLocation?: number
}
const CSS_VARS = {
  width: '--button-width',
};
const KeyboardButton = (props: ButtonProps) => {
  const {
    className,
    width = '60px',
    value,
    value2,
    location,
    keyLocation = 0,
    ...other
  } = props;
  const cssVars = useMemo(() => {
    return { [CSS_VARS.width]: width };
  }, [ width ]);
  const isActiveLeft = useSelector(getActiveKeyLeft);
  const isActiveRight = useSelector(getActiveKeyRight);

  return (
    <button
      style={cssVars}
      className={classes(
        cls.button,
        location === 'start'
          ? cls.button_p2_start
          : '' || location === 'end'
            ? cls.button_p2_end
            : '' || location === 'center_bottom'
              ? cls.button_p2_center_bottom
              : '',
        { [cls.active]: isActiveLeft !== null ? isActiveLeft.key.toLowerCase() === value && isActiveLeft.location === keyLocation : false },
        { [cls.active]: isActiveLeft !== null ? isActiveLeft.key.toLowerCase() === value2 && isActiveLeft.location === keyLocation : false },
        { [cls.active]: isActiveRight !== null ? isActiveRight.key.toLowerCase() === value && isActiveRight.location === keyLocation : false },
        { [cls.active]: isActiveRight !== null ? isActiveRight.key.toLowerCase() === value2 && isActiveRight.location === keyLocation : false },
        className
      )}
      {...other}
    >
      {value2 && (
        <p
          className={classes(
            cls.button_p2,
            location === 'start'
              ? cls.button_p2_left
              : '' || location === 'end'
                ? cls.button_p2_right
                : '',
            { [cls.button_p_small]: value }

          )}
        >
          {value2}
        </p>
      )}
      <p className={classes(cls.button_p, { [cls.button_p_small]: value2 })}>{value}</p>
    </button>
  );
};

export default KeyboardButton;
