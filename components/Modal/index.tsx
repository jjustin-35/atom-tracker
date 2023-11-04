'use client';

import { Modal as MuiModal } from '@mui/material';

import { ModalTypes } from '@/constants/types/modal';
import ModalComponent from './components';
import { Outer, Wrapper } from './styled';

type Props = {
  type: ModalTypes;
  modalProps?: Record<string, any>;
  closeHandler: () => void;
};

const Modal = ({ type, modalProps, closeHandler }: Props) => {
  const isOpen = !!type;
  return (
    <MuiModal open={isOpen} onClose={closeHandler}>
      <Outer>
        <Wrapper>
          <ModalComponent type={type} modalProps={modalProps} />
        </Wrapper>
      </Outer>
    </MuiModal>
  );
};

export default Modal;
