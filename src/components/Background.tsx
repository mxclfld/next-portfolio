"use client";

import About from "./About";
import { Typewriter } from "react-simple-typewriter";

export default function Background() {
  return (
    <section className="mt-40 sm:mt-0 flex flex-col justify-center min-h-screen lg:gap-4 w-full">
      <div className='blob -bottom:3/4 sm:-bottom-1/3 md:right-2/3 lg:right-1/3 absolute' />
      <div className="flex flex-col flex-initial gap-12 lg:gap-8 xl:gap-12 2xl:gap-20 lg:flex-row lg:justify-between lg:items-center">
        <div className="w-full lg:w-1/4 self-start lg:text-end font-bold text-xl bg-primary text-black px-2 mix-blend-difference">
          <Typewriter words={["Background"]} loop cursor cursorStyle="_" delaySpeed={4000} typeSpeed={400} />
        </div>
        <About />
      </div>
    </section>
  );
}
