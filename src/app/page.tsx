import HeroSection from '@/components/HeroSection';

export default function Home() {

  return (
    <main className="mt-20 sm:mt-0 flex flex-col justify-center mx-12 xl:mx-auto max-w-7xl text-primary overflow-hidden ">
      <div className='hidden hero lg:block' />
      <div className='hidden lg:block w-32 h-16 border-2 border-primary absolute top-32 -left-20' />
      <div className='hidden lg:block w-32 h-16 border-2 border-primary absolute bottom-32 right-20'/>
      <HeroSection />
    </main>
  );
}
