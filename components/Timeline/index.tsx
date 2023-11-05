'use client';

import { useDispatch } from 'react-redux';
import { Timeline as TimelineWrapper } from '@mui/lab';
import { TimeNodeType } from '@/constants/types/api';
import { TimeNodeVariantType } from '@/constants/types/timenode';
import { ModalStateType, openModal as openModalAction } from '@/redux/slices/modal';
import { EDIT_TIMNODE } from '@/constants/modalType';
import Item from './Item';

type Props = {
  data: TimeNodeType[];
};

const Timeline = ({ data }: Props) => {
  const dispatch = useDispatch();
  const openModal = (data: ModalStateType) => dispatch(openModalAction(data));

  const itemClickHandler = (timenodeId?: TimeNodeType['id']) => {
    openModal({
      modalType: EDIT_TIMNODE,
      modalProps: { timenodeId },
    });
  };

  const date = new Date();
  const currentHour = date.getHours();
  const hours = Array.from({ length: currentHour + 1 }, (_, i) => i);
  const items = hours.map((hour) => {
    const item = data.find((item) => item.time === hour);
    if (item) {
      return { ...item, isNewItem: false };
    }
    return {
      time: hour,
      title: '點我新增紀錄',
      type: 'default',
      isNewItem: true,
    };
  });

  return (
    <TimelineWrapper position="left">
      {items.map((item) => (
        <Item
          key={item.id}
          time={item.time}
          timenodeId={item.id}
          type={item.type as TimeNodeVariantType}
          title={item.title}
          isNewItem={item.isNewItem}
          itemClickHandler={itemClickHandler}
        />
      ))}
    </TimelineWrapper>
  );
};

export default Timeline;
