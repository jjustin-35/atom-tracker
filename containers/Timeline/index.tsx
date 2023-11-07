import { getServerSession } from 'next-auth';
import dayjs from 'dayjs';

import { DATE_FORMAT } from '@/constants/timeFormat';
import { getTimeline } from '@/apis/timeline';
import { getUser } from '@/apis/auth';
import Timeline from '@/components/Timeline';

const TimelineContainer = async () => {
  try {
    const session = await getServerSession();
    const { email } = session.user;
    const user = await getUser(email);
    if (!user) return null;

    const today = dayjs().format(DATE_FORMAT);
    const data = await getTimeline(user.id, today);

    return <Timeline data={data} />;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default TimelineContainer;
