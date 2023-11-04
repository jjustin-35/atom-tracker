'use client';

import { Timeline as TimelineWrapper } from '@mui/lab';
import { TimeNodeType } from '@/constants/types/api';
import Item from './Item';

type Props = {
  data: TimeNodeType[];
};

const Timeline = ({ data }: Props) => {
  return (
    <TimelineWrapper position="left">
    </TimelineWrapper>
  );
};

export default Timeline;
