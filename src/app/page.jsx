import Category from '@/components/Home/Category';
import Hero from '@/components/Home/Hero';
import Trending from '@/components/Home/Trending';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Category />
        <Trending />
      </main>
    </>
  );
}
