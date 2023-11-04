import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { TimeNodeVariantType } from '@/constants/types/timenode';
import { TimeHandler } from '@/helpers/time';
import Icon from '../Icon';
import Node from './Node';

type Props = {
  time: Date;
  type: TimeNodeVariantType;
  content: string;
  isNewItem: boolean;
};

const Item = ({ time, type, content, isNewItem }: Props) => {
  const iconType = isNewItem && !type ? 'default' : type;
  const formatedTime = TimeHandler(time);
  return (
    <TimelineItem>
      <TimelineOppositeContent>{formatedTime}</TimelineOppositeContent>
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
