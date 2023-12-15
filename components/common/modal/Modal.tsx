import React, { ReactNode, useRef } from 'react';
import classNames from 'classnames';
import { useClickOutside } from 'hooks/useClickOutSide';
import cls from './modal.module.css';


interface ModalAuthProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const Modal: React.FC<ModalAuthProps> = ({ isOpen, onClose, children, className }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, onClose);
  if (!isOpen) return null;
  return (
    <div className={classNames(cls.modal, className ?? '')}>
      <div ref={modalRef}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
