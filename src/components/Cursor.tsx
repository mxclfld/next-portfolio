"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CursorType, useCursor } from "@/context/CursorProvider";
import cn from "@/lib/cn";

type Point = { x: number; y: number };
type SizeMapType = { [Key in CursorType]: number };

const SIZE_MAP: SizeMapType = {
  default: 32,
  text: 128,
  link: 64,
};

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState<Point>({ x: 0, y: 0 });
  const { cursorVariant, cursorText } = useCursor();

  const [isVisible, setIsVisible] = useState(false);

  const variants = {
    default: {
      height: SIZE_MAP.default,
      width: SIZE_MAP.default,
      x: mousePosition.x - SIZE_MAP.default / 2,
      y: mousePosition.y - SIZE_MAP.default / 2,
    },
    text: {
      height: SIZE_MAP.text,
      width: SIZE_MAP.text,
      x: mousePosition.x - SIZE_MAP.text / 2,
      y: mousePosition.y - SIZE_MAP.text / 2,
    },
    link: {
      height: SIZE_MAP.link,
      width: SIZE_MAP.link,
      x: mousePosition.x - SIZE_MAP.link / 2,
      y: mousePosition.y - SIZE_MAP.link / 2,
    },
  };

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <motion.div
      className={cn(
        "bg-primary mix-blend-difference fixed top-0 left-0 rounded-full pointer-events-none flex justify-center items-center",
        !isVisible && "hidden"
      )}
      variants={variants}
      animate={cursorVariant}
    />
  );
}
