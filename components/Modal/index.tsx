'use client';

import { Modal as MuiModal } from '@mui/material';

import { ModalTypes } from '@/constants/types/modal';

import ModalComponent from './components';
import { Outer, Wrapper, Inner } from './styled';

type Props = {
  type?: ModalTypes;
  modalProps?: Record<string, any>;
  closeHandler: () => void;
};

const Modal = ({ type, modalProps, closeHandler }: Props) => {
  const isOpen = !!type;
  return (
    <MuiModal open={isOpen} onClose={closeHandler}>
      <Outer>
        <Wrapper>
          <Inner>
            <ModalComponent type={type} modalProps={modalProps} />
          </Inner>
        </Wrapper>
      </Outer>
    </MuiModal>
  );
};

export default Modal;
