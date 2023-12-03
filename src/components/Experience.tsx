"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import WorkHistory from './WorkHistory';

export default function Experience() {
  return (
    <motion.section
      className="mt-40 sm:mt-0 flex flex-col justify-center min-h-screen lg:gap-4 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <div className="flex flex-col flex-initial gap-12 lg:gap-8 xl:gap-12 2xl:gap-20 lg:flex-row lg:justify-between lg:items-center">
        <div className="w-full lg:w-1/4 self-start lg:text-end font-bold text-xl bg-primary text-black px-2 mix-blend-difference">
          <Typewriter
            words={["EXPERIENCE"]}
            loop
            cursor
            cursorStyle="_"
            delaySpeed={4000}
            typeSpeed={400}
            deleteSpeed={100}
          />
        </div>
        <WorkHistory />
      </div>
    </motion.section>
  );
}
