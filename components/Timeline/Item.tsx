import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { TimeNodeVariantType } from '@/constants/types/timenode';
import Icon from '../Icon';
import Node from './Node';

type Props = {
  time: string;
  type: TimeNodeVariantType;
  content: string;
  isNewItem: boolean;
};

const Item = ({ time, type, content, isNewItem }: Props) => {
  const iconType = isNewItem && !type ? 'default' : type;
  return (
    <TimelineItem>
      <TimelineOppositeContent>{time}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <Icon type={iconType} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Node isNewItem={isNewItem} content={content} />
      </TimelineContent>
    </TimelineItem>
  );
};

export default Item;
