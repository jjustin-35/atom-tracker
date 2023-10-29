'use client';

import { useState } from 'react';
import { Modal as MuiModal } from '@mui/material';

import ModalComponent, { ModalTypes } from './components';
import { Outer, Wrapper } from './styled';

type Props = {
  type: ModalTypes;
};

const Modal = ({ type }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <MuiModal open={isOpen} onClose={closeHandler}>
      <Outer>
        <Wrapper>
          <ModalComponent type={type} />
        </Wrapper>
      </Outer>
    </MuiModal>
  );
};

export default Modal;
