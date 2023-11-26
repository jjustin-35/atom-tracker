'use client';

import { useDispatch } from 'react-redux';
import { Timeline as TimelineWrapper } from '@mui/lab';
import dayjs from 'dayjs';

import type { TimeNodeType } from '@/constants/types/api';
import type { TimeNodeVariantType } from '@/constants/types/timenode';
import {
  ModalStateType,
  openModal as openModalAction,
} from '@/redux/slices/modal';
import { EDIT_TIMENODE } from '@/constants/modalType';
import { colors } from '@/constants/styles';
import Item from './Item';
import Icon from '../Icon';
import { Wrapper, AddButton } from './styled';

type Props = {
  data: TimeNodeType[];
};

const Timeline = ({ data }: Props) => {
  const dispatch = useDispatch();
  const openModal = (data: ModalStateType) => dispatch(openModalAction(data));
  const time = dayjs();
  const currentHour = time.hour();
  const hours = Array.from({ length: currentHour + 1 }, (_, i) => i);
  const items = hours.map((hour) => {
    const item = data?.find((item) => hour <= item.endTime);
    if (item) {
      return { ...item, endTime: hour, isNewItem: false };
    }
    return {
      endTime: hour,
      title: '點我新增紀錄',
      type: 'default',
      isNewItem: true,
    };
  });

  const addHandler = () => {
    const time = dayjs().hour() + 1;

    openModal({
      modalType: EDIT_TIMENODE,
      modalProps: { time, isAddItem: true },
    });
  };

  const clickHandler = (time: number, timenodeId?: TimeNodeType['id']) => {
    openModal({
      modalType: EDIT_TIMENODE,
      modalProps: { timenodeId, time },
    });
  };

  return (
    <Wrapper>
      <TimelineWrapper position="right">
        {items.map((item, idx) => (
          <Item
            key={idx}
            time={item.endTime}
            timenodeId={item.id || null}
            type={item.type as TimeNodeVariantType}
            title={item.title}
            isNewItem={item.isNewItem}
            clickHandler={clickHandler}
          />
        ))}
      </TimelineWrapper>
      <AddButton onClick={addHandler}>
        <Icon
          type="add"
          color={colors.white}
          size={{ width: '30px', height: '30px' }}
        />
      </AddButton>
    </Wrapper>
  );
};

export default Timeline;
