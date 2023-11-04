'use client';

import { Timeline as TimelineWrapper } from '@mui/lab';
import Item from './Item';

const Timeline = ({ data }) => {
  return (
    <TimelineWrapper position="left">
      {data.items?.map((item, idx) => (
        <Item
          key={idx}
          time={item.time}
          type={item.type}
          content={item.content}
          isNewItem={item.isNewItem}
        />
      ))}
    </TimelineWrapper>
  );
};

export default Timeline;
