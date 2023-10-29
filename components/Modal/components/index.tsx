import React, { FC } from 'react';
import EditTimelineItem from './EditTimelineItem';

export type ModalTypes = 'edit_timeline_item';

type Props = {
  type: ModalTypes;
};

const components: Record<string, FC> = {
  edit_timeline_item: EditTimelineItem,
};

const ModalComponent = ({ type }: Props) => {
  const Component = components[type];
  return <Component />;
};

export default ModalComponent;
