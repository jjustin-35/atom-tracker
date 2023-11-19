import Modal from '@/containers/Modal';
import Timeline from '@/containers/Timeline';

export const revalidate = 60 * 60;

const Dashboard = async () => {
  return (
    <>
      <Modal />
      <Timeline />
    </>
  );
};

export default Dashboard;
