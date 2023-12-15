'use client';
import { FC, ReactNode, useRef } from 'react';
import classes from 'classnames';
import { useClickOutside } from 'hooks/useClickOutSide';
import cls from './dropdown.module.css';


interface IDropdownProps {
  children: ReactNode,
  content: ReactNode,
  isShow: boolean
  className?: string,
  onClose: () => void
}
const Dropdown: FC<IDropdownProps> = (props) => {
  const {
    children,
    className,
    isShow,
    content,
    onClose
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClose);
  return (
    <div
      ref={ref}
      className={classes(
        cls.dropdown,
        className ?? '',
        { [cls.dropdown_show]: isShow }
      )}
    >
      <div>
        {content}
      </div>
      <div>
        { isShow && children}
      </div>
    </div>
  );
};

export default Dropdown;
