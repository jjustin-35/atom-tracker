import { getServerSession } from 'next-auth';
import { getTimeline } from '@/apis/timeline';
import Timeline from '@/components/Timeline';

const TimelineContainer = async () => {
  const session = await getServerSession();
  console.log('session', session);
  //   const data = await getTimeline();
  //   return <Timeline />;
  return <></>;
};

export default TimelineContainer;
