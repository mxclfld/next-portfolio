"use client";

import { Typewriter } from "react-simple-typewriter";
import { useCursor } from "@/context/CursorProvider";
import { motion } from "framer-motion";
import Link from "next/link";

import { skills } from "@/lib/skills";
import { socials } from "@/lib/socials";
import { FaArrowDownLong } from "react-icons/fa6";
import Skills from "./Skills";
import Introduction from "./Introduction";

export default function HeroSection() {
  const { setToDefault, setToText, setToLink, setToSkills } = useCursor();

  return (
    <motion.section className="flex flex-col justify-center min-h-[95vh] lg:gap-4 w-full relative">
      <div className="flex flex-col flex-initial gap-12 lg:gap-8 xl:gap-12 2xl:gap-20 lg:flex-row lg:justify-between lg:items-center">
        <Introduction />
        <Skills />
      </div>
      <motion.div
        animate={{ bottom: [0, 50, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 0.7 }}
        className="absolute right-1/2"
      >
        <FaArrowDownLong />
      </motion.div>
    </motion.section>
  );
}
