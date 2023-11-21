import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { TimeNodeVariantType } from '@/constants/types/timenode';
import Icon from '../../Icon';
import Node from '../Node';
import { TimeWrapper } from './styled';

type Props = {
  time: number;
  timenodeId?: string;
  type: TimeNodeVariantType;
  title: string;
  isNewItem: boolean;
  clickHandler?: (time: number, timenodeId?: string) => void;
};

const Time = ({ time }: { time: string }) => {
  return <TimeWrapper>{time}</TimeWrapper>;
};

const Item = ({
  time,
  timenodeId,
  type,
  title,
  isNewItem,
  clickHandler,
}: Props) => {
  const iconType = isNewItem && !type ? 'default' : type;
  const formattedTime = time < 10 ? `0${time}:00` : `${time}:00`;
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ flex: 'unset' }}>
        <Time time={formattedTime} />
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot sx={{ my: '8px' }}>
          <Icon type={iconType} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent onClick={() => clickHandler(time, timenodeId)}>
        <Node isNewItem={isNewItem} title={title} />
      </TimelineContent>
    </TimelineItem>
  );
};

export default Item;
