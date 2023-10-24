import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import Header from '@/components/Header';
import Banner from '@/components/Banner';

export default function Home() {
  const variant = 'home';
  const session = getServerSession();
  if (session) redirect('/dashboard');

  return (
    <>
      <Header type="common" />
      <Banner variant={variant} />
    </>
  );
}
