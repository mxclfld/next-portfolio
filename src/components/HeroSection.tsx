"use client";

import { useEffect, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";

import Introduction from "./Introduction";
import Skills from "./Skills";

const ANIMATE_VARIANTS_MAP = {
  MOVING: 'moving',
  STEADY: 'steady',
}

type AnimateVariants = typeof ANIMATE_VARIANTS_MAP[keyof typeof ANIMATE_VARIANTS_MAP];

const { MOVING, STEADY } = ANIMATE_VARIANTS_MAP;

export default function HeroSection() {
  const [animateVariant, setAnimateVariant] =
    useState<AnimateVariants>("moving");

  useEffect(() => {
    const onScroll = () => {
      const newVariant: AnimateVariants =
        window.scrollY < window.innerHeight / 3 ? MOVING : STEADY;
      if (newVariant !== animateVariant) setAnimateVariant(newVariant);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [animateVariant]);

  const variants = {
    moving: {
      bottom: [0, 50, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 0.7,
      },
    },
    steady: {
      opacity: 1,
      bottom: [0, 50, 0],
    },
  };

  return (
    <section className="flex flex-col justify-center min-h-[95vh] lg:gap-4 w-full relative">
      <div className="flex flex-col flex-initial gap-52 sm:gap-8 xl:gap-12 2xl:gap-20 lg:flex-row lg:justify-between lg:items-center">
        <Introduction />
        <Skills />
      </div>
      <motion.div
        variants={variants}
        animate={animateVariant}
        className="hidden lg:block absolute right-1/2"
      >
        <FaArrowDownLong />
      </motion.div>
    </section>
  );
}
