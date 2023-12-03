import Background from '@/components/Background';
import HeroSection from '@/components/HeroSection';

export default function Home() {

  return (
    <main className="mt-44 sm:mt-0 flex flex-col justify-center mx-12 xl:mx-auto max-w-7xl text-primary overflow-hidden">
      <div className='hero opacity-30 lg:opacity-100' />
      <div className='hidden lg:block w-32 h-16 border-2 border-primary absolute top-32 -left-20' />
      <div className='hidden lg:block w-32 h-16 border-2 border-primary absolute bottom-32 right-20'/>
      <HeroSection />
      <Background />
    </main>
  );
}
