"use client";

import { useCursor } from "@/context/CursorProvider";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter';

const socials = [
  {
    icon: FaGithub,
    link: "https://github.com/mxclfld",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/diana-kosovan-6a1383249/",
  },
];

export default function Home() {
  const { setToDefault, setToText, setToLink } = useCursor();

  return (
    <main className="flex flex-col justify-center text-primary">
      <div className="flex flex-col justify-center min-h-[75vh]">
        <div
          className="flex flex-col gap-1 w-fit"
          onMouseEnter={setToText}
          onMouseLeave={setToDefault}
        >
          <p>Hi, my name is</p>
          <p className="text-3xl md:text-5xl lg:text-7xl text-white">
            Diana Kosovan
          </p>
          <div className="text-xl md:text-3xl lg:text-5xl text-secondary bg-primary w-fit px-1">
            <p><Typewriter words={['Full Stack', 'Front End', 'Back End', 'Web']} loop /> Developer</p>
          </div>
          <div className="flex mt-4 gap-2 text-3xl">
            {socials.map((social, idx) => (
              <Link key={idx} href={social.link} target="_blank">
                <motion.div
                  whileHover={{
                    scale: 1.5,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  onMouseEnter={setToLink}
                  onMouseLeave={setToDefault}
                >
                  <social.icon />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
