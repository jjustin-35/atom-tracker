import React, { FC } from 'react';
import { ModalTypes } from '../../../constants/types/modal';
import { EDIT_TIMENODE } from '@/constants/modalType';
import EditTimeNode from './EditTimeNode';

type Props = {
  type: ModalTypes;
  modalProps?: Record<string, any>;
};

const components: Record<ModalTypes, FC> = {
  [EDIT_TIMENODE]: EditTimeNode,
};

const ModalComponent = ({ type, modalProps }: Props) => {
  const Component = components[type];
  return <Component {...modalProps} />;
};

export default ModalComponent;
