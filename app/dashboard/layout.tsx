import Header from '@/components/Header';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header type="app" variant="dashboard" />
      {children}
    </>
  );
};

export default DashboardLayout;
