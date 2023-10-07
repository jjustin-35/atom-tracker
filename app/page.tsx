import Header from '@/components/Header';
import Banner from '@/components/Banner';

export default function Home() {
  const variant = 'home';
  return (
    <>
      <Header type='common' />
      <Banner variant={variant} />
    </>
  );
}
