"use client";

import { useCursor } from "@/context/CursorProvider";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { socials } from "@/lib/socials";

export default function Footer() {
  const { setToLink, setToDefault } = useCursor();

  return (
    <footer className="pb-2 border-t border-primary w-full bg-black">
      <div className="mx-12 py-4 xl:mx-auto max-w-7xl">
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-0 lg:flex-row lg:justify-between">
          <div className="flex gap-2 text-3xl w-fit">
            {Object.values(socials).map((social) => (
              <Link
                className="text-primary"
                key={social.label}
                href={social.link}
                target="_blank"
              >
                <motion.div
                  whileHover={{
                    scale: 1.5,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  aria-label={social.label}
                  onMouseEnter={setToLink}
                  onMouseLeave={setToDefault}
                >
                  <social.icon />
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="text-white font-bold text-center">
            Designed & developed by Diana Kosovan
          </div>
        </div>
      </div>
    </footer>
  );
}
