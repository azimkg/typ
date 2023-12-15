'use client';
import Modal from 'common/modal/Modal';
import ModalAuthContent from 'components/modalAuth/ModalAuthContent';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getModalAuthVisible } from 'models/user/selectors/userSelector';
import { userActions } from 'models/user/slice/userSlice';
import { useSelector } from 'react-redux';
import cls from './ModalAuth.module.css';


const ModalAuth = () => {
  const dispatch = useAppDispatch();
  const isOpen = useSelector(getModalAuthVisible);
  const handeClose = () => {
    dispatch(userActions.handleChangeModalAuth(false));
    dispatch(userActions.handleChangeStageAuth(0));
  };
  return (
    <Modal isOpen={isOpen} onClose={handeClose}>
      <div className={cls.content}>
        <ModalAuthContent />
      </div>
    </Modal>
  );
};

export default ModalAuth;
