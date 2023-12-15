import { FC, ReactNode } from 'react';
import classes from 'classnames';
import cls from './container.module.css';


interface IContainerProps {
  className?: string
  children: ReactNode
}
const Container: FC<IContainerProps> = (props) => {
  const {
    children,
    className
  } = props;
  return (
    <div className={classes(cls.container,  className ?? '')}>
      {children}
    </div>
  );
};

export default Container;
