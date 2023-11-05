import React, { FC } from 'react';
import { ModalTypes } from '../../../constants/types/modal';
import { EDIT_TIMNODE } from '@/constants/modalType';
import EditTimeNode from './EditTimeNode';

type Props = {
  type: ModalTypes;
  modalProps?: Record<string, any>;
};

const components: Record<ModalTypes, FC> = {
  [EDIT_TIMNODE]: EditTimeNode,
};

const ModalComponent = ({ type, modalProps }: Props) => {
  const Component = components[type];
  return <Component {...modalProps} />;
};

export default ModalComponent;
