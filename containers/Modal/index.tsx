'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { closeModal, ModalStateType } from '@/redux/slices/modal';
import Modal from '@/components/Modal';

const ModalContainer = () => {
  const dispatch = useDispatch();
  const { modalType, modalProps } = useSelector<RootState, ModalStateType>(
    (state) => state.modal,
  );
  const closeHandler = () => dispatch(closeModal());

  return (
    <Modal
      type={modalType}
      modalProps={modalProps}
      closeHandler={closeHandler}
    />
  );
};

export default ModalContainer;
