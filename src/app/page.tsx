"use client";

import { useCursor } from "@/context/CursorProvider";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import cn from "@/lib/cn";
import { skills } from "@/lib/skills";
import { socials } from "@/lib/socials";

export default function Home() {
  const { setToDefault, setToText, setToLink } = useCursor();

  return (
    <main className="flex flex-col justify-center text-primary">
      <section className="flex flex-col justify-center min-h-[95vh] lg:gap-4 w-full">
        <div className="flex flex-col flex-initial gap-12 lg:gap-8 xl:gap-12 2xl:gap-20 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex-1 gap-2">
            <p
              className="w-fit"
              onMouseEnter={setToText}
              onMouseLeave={setToDefault}
            >
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
          <div className="flex-1 flex flex-col gap-2">
            <p>My skills</p>

            <div className="flex flex-col gap-3">
              {skills.map((category) => (
                <div key={category.label} className="flex flex-col gap-1">
                  <div className="border-l border-primary">
                    <p className="pl-2 font-bold">{category.label}</p>
                  </div>
                  <div className="flex flex-row flex-wrap gap-1">
                    {category.skillsList.map((skill) => (
                      <div key={skill.label} className={cn("text-3xl")}>
                        <skill.icon />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
