import Modal from '@/containers/Modal';
import Timeline from '@/containers/Timeline';

export const revalidate = 60 * 60;

const Dashboard = () => {
  return (
    <>
      <Modal />
      <Timeline />
    </>
  );
};

export default Dashboard;
