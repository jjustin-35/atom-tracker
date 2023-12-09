import { getServerSession } from 'next-auth';
import dayjs from 'dayjs';

import { DATE_FORMAT } from '@/constants/timeFormat';
import { getTimeline as getTimelineApi } from '@/apis/timeline';
import { getUser } from '@/apis/auth';
import Timeline from '@/components/Timeline';

const TimelineContainer = async () => {
  try {
    const session = await getServerSession();
    const { email } = session.user;
    const user = await getUser(email);
    if (!user) return null;

    const getTimeline = async (userId: string, date: string) => {
      const data = await getTimelineApi(userId, date);
      return data;
    }

    const data = await getTimeline(user.id, dayjs().format(DATE_FORMAT));

    return <Timeline data={data} getTimeline={getTimeline} />;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default TimelineContainer;
