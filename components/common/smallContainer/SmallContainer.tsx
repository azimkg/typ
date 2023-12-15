import { FC, ReactNode } from 'react';
import cls from './smallContainer.module.css';


interface ISmallContainerProps {
  children: ReactNode
}
const SmallContainer: FC<ISmallContainerProps> = ({ children }) => {
  return (
    <div className={cls.container}>
      {children}
    </div>
  );
};

export default SmallContainer;
