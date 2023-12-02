"use client";

import { Typewriter } from "react-simple-typewriter";
import { useCursor } from "@/context/CursorProvider";
import { socials } from "@/lib/socials";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Introduction() {
  const { setToDefault, setToText, setToLink } = useCursor();

  return (
    <div className="flex-1 gap-2">
      <p className="w-fit" onMouseEnter={setToText} onMouseLeave={setToDefault}>
        Hi, my name is
      </p>
      <p
        className="text-3xl md:text-5xl lg:text-7xl text-white w-fit"
        onMouseEnter={setToText}
        onMouseLeave={setToDefault}
      >
        Diana Kosovan
      </p>
      <div
        className="text-xl md:text-3xl lg:text-5xl text-secondary bg-primary w-fit px-1"
        onMouseEnter={setToText}
        onMouseLeave={setToDefault}
      >
        <p onMouseEnter={setToText} onMouseLeave={setToDefault}>
          <Typewriter
            words={["Full Stack", "Front End", "Back End", "Web"]}
            loop
          />{" "}
          Developer
        </p>
      </div>
      <div className="flex mt-4 gap-2 text-3xl w-fit">
        {socials.map((social) => (
          <Link key={social.label} href={social.link} target="_blank">
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
      <div className="text-black w-3/4 mt-10 lg:mt-20">
        <p
          className="text-primary"
          onMouseEnter={setToText}
          onMouseLeave={setToDefault}
        >
          Explore my portfolio to discover how my skills can contribute to
          impactful and innovative web solutions.
        </p>
      </div>
    </div>
  );
}
