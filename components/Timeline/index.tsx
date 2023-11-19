'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Timeline as TimelineWrapper } from '@mui/lab';
import dayjs, { Dayjs } from 'dayjs';

import type { TimeNodeType } from '@/constants/types/api';
import type { TimeNodeVariantType } from '@/constants/types/timenode';
import {
  ModalStateType,
  openModal as openModalAction,
} from '@/redux/slices/modal';
import { EDIT_TIMNODE } from '@/constants/modalType';
import Item from './Item';

type Props = {
  data: TimeNodeType[];
};

const Timeline = ({ data }: Props) => {
  const dispatch = useDispatch();
  const openModal = (data: ModalStateType) => dispatch(openModalAction(data));
  const initTime = dayjs();
  const [time, setTime] = useState<Dayjs>(initTime);
  const currentHour = time.hour();
  const hours = Array.from({ length: currentHour + 1 }, (_, i) => i);
  const items = hours.map((hour) => {
    const item = data?.find((item) => item.time === hour);
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

  // update time every hour
  useEffect(() => {
    const nextHour = currentHour + 1;
    const delay = (() => {
      if (nextHour < 24) {
        const nextTime = dayjs().hour(nextHour);
        return nextTime.diff(time, 'millisecond');
      }
      const nextTime = dayjs().add(1, 'day').hour(nextHour - 24);
      return nextTime.diff(time, 'millisecond');
    })();

    const timer = setInterval(() => {
      setTime(dayjs());
    }, delay);
    return () => clearInterval(timer);
  }, [time]);

  const itemClickHandler = (time: number, timenodeId?: TimeNodeType['id']) => {
    openModal({
      modalType: EDIT_TIMNODE,
      modalProps: { timenodeId, time },
    });
  };

  return (
    <TimelineWrapper position="right">
      {items.map((item, idx) => (
        <Item
          key={idx}
          time={item.time}
          timenodeId={item.id || null}
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
