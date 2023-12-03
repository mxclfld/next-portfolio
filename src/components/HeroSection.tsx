"use client";

import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";

import Introduction from "./Introduction";
import About from "./About";
import Skills from './Skills';

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center min-h-[95vh] lg:gap-4 w-full relative">
      <div className="flex flex-col flex-initial gap-40 lg:gap-8 xl:gap-12 2xl:gap-20 lg:flex-row lg:justify-between lg:items-center">
        <Introduction />
        <Skills />
      </div>
      <motion.div
        animate={{ bottom: [0, 50, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 0.7 }}
        className="hidden lg:block absolute right-1/2"
      >
        <FaArrowDownLong />
      </motion.div>
    </section>
  );
}
