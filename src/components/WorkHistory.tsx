"use client";

import { useCursor } from "@/context/CursorProvider";
import { workHistory } from "@/lib/workHistory";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";
import Skill from "./Skill";

export default function WorkHistory() {
  const { setToDefault, setToLink, setToSkills, setToText } = useCursor();

  return (
    <div className="flex-1 text-primary mix-blend-difference pl-10 border-l-2 border-primary">
      <div className="flex flex-col gap-4 relative">
        {workHistory.map(
          ({
            id,
            projectName,
            startDate,
            endDate,
            companyLink,
            companyName,
            skills,
            responsibilities,
          }) => (
            <div key={id} className="flex flex-col gap-4 experience">
              <p
                className="font-bold text-lg uppercase w-fit"
                onMouseEnter={setToText}
                onMouseLeave={setToDefault}
              >
                {projectName}
              </p>
              <p
                className="w-fit"
                onMouseEnter={setToText}
                onMouseLeave={setToDefault}
              >
                [{startDate} — {endDate}]
              </p>
              <Link
                href={companyLink}
                target="_blank"
                onMouseEnter={setToLink}
                onMouseLeave={setToDefault}
              >
                <div className="flex flex-row gap-2 items-center hover:bg-primary hover:text-black w-fit hover:px-4">
                  <FaLink />
                  <p>{companyName}</p>
                </div>
              </Link>
              <div
                className="flex flex-row flex-wrap gap-1 w-fit"
                onMouseEnter={setToSkills}
                onMouseLeave={setToDefault}
              >
                {skills.map((skill) => (
                  <Skill key={`${id} ${projectName} ${skill}`} name={skill} />
                ))}
              </div>
              <div
                className="w-fit"
                onMouseEnter={setToText}
                onMouseLeave={setToDefault}
              >
                {typeof responsibilities === "string" ? (
                  <p>{responsibilities}</p>
                ) : (
                  responsibilities
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
