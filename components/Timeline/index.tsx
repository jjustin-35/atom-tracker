'use client';

import { Timeline as TimelineWrapper } from '@mui/lab';
import { TimeNodeType } from '@/constants/types/api';
import { TimeNodeVariantType } from '@/constants/types/timenode';
import Item from './Item';

type Props = {
  data: TimeNodeType[];
};

const Timeline = ({ data }: Props) => {
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = new Date()
  });
  return (
    <TimelineWrapper position="left">
      {data.map((item) => (
        <Item
          key={item.id}
          time={item.time}
          type={item.type as TimeNodeVariantType}
          content={item.title}
          isNewItem={false}
        />
      ))}
    </TimelineWrapper>
  );
};

export default Timeline;
