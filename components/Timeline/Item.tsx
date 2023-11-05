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
  time: number;
  timenodeId?: string;
  type: TimeNodeVariantType;
  title: string;
  isNewItem: boolean;
  itemClickHandler?: (timenodeId?: string) => void;
};

const Item = ({ time, timenodeId, type, title, isNewItem, itemClickHandler }: Props) => {
  const iconType = isNewItem && !type ? 'default' : type;
  const formattedTime = time < 10 ? `0${time}:00` : `${time}:00`;
  return (
    <TimelineItem>
      <TimelineOppositeContent>{formattedTime}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <Icon type={iconType} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent onClick={() => itemClickHandler(timenodeId)}>
        <Node
          isNewItem={isNewItem}
          title={title}
        />
      </TimelineContent>
    </TimelineItem>
  );
};

export default Item;
