import React, { FC } from 'react';
import { ModalTypes } from '../../../constants/types/modal';
import EditTimelineItem from './EditTimelineItem';

type Props = {
  type: ModalTypes;
  modalProps?: Record<string, any>;
};

const components: Record<string, FC> = {
  edit_timeline_item: EditTimelineItem,
};

const ModalComponent = ({ type, modalProps }: Props) => {
  const Component = components[type];
  return <Component {...modalProps} />;
};

export default ModalComponent;
