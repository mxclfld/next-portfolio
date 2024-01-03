"use client";

import { useCursor } from "@/context/CursorProvider";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { socials } from "@/lib/socials";

export default function Footer() {
  const { setToLink, setToDefault } = useCursor();
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="pb-2 border-t border-primary w-full backdrop-blur-md bg-black">
      <div className="mx-12 py-4 xl:mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-3xl w-fit">
            {socials.map((social) => (
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
          <div className="text-white font-bold">
            Designed & developed by Diana Kosovan
          </div>
        </div>
      </div>
    </footer>
  );
}
