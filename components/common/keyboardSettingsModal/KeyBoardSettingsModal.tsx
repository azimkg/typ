'use client';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getSettingsModal } from 'models/keyboard/selectors/keyboardSelectors';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import KeyboardSettingsContent from './keyboardSettingsContent/KeyboardSettingsContent';


const KeyBoardSettingsModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useSelector(getSettingsModal);
  const handleClose = () => {
    dispatch(keyboardActions.setSettingsModal(false));
  };
  return (
    <Modal isOpen={isOpen} onClose={handleClose}><KeyboardSettingsContent handleClose={handleClose} /></Modal>
  );
};

export default KeyBoardSettingsModal;
