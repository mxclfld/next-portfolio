"use client";

import { db } from "@/lib/prisma";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Project from "./Project";
import { trpc } from "@/app/_trpc/client";

export default function Projects() {
  const { data: projects, isLoading } = trpc.getProjectsWithImg.useQuery();
  const { data: projectWithoutImg } = trpc.getProjectsWithoutImg.useQuery();
  console.log({ projects, projectWithoutImg })

  return (
    <motion.section
      className="mt-40 mb-40 sm:mt-0 flex flex-col justify-center min-h-screen lg:gap-4 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <div className="flex flex-col gap-20">
        <div className="self-center text-center font-bold text-5xl bg-primary text-black px-2">
          <Typewriter
            words={["PROJECTS"]}
            loop
            cursor
            cursorStyle="_"
            delaySpeed={4000}
            typeSpeed={400}
            deleteSpeed={100}
          />
        </div>
        <div className="flex flex-row gap-10 flex-wrap justify-center">
          {!isLoading &&
            projects &&
            projects.map((_) => <Project isCard key={_.title} project={_} />)}
        </div>
      </div>
    </motion.section>
  );
}
