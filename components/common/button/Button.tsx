import React, { ReactNode, ButtonHTMLAttributes, useMemo } from 'react';
import classes from 'classnames';
import { ButtonHeight } from 'common/button/buttonSchema';
import cls from './Button.module.css';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  white?: boolean
  width?: string
  height?: ButtonHeight
}
const WIDTH_VARS = {
  width: '--btn-width',
};
const Button: React.FC<ButtonProps> = ({ children, height = ButtonHeight.M, white, width = 'fit-content', className, ...rest }) => {
  const widthVars = useMemo(() => {
    return { [WIDTH_VARS.width]: width };
  }, [width]);
  return (
    <button
      style={widthVars}
      className={
        classes(
          cls.button,
          cls[`button${height}`],
          className,
          { [cls.button_white]: white },
        )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
