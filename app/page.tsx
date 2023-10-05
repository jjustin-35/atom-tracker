import Header from '@/components/Header';
import Banner from '@/components/Banner';

export default function Home() {
  const variant = 'home';
  return (
    <>
      <Header />
      <Banner variant={variant} />
    </>
  );
}
