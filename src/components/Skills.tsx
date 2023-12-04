"use client";

import { useCursor } from "@/context/CursorProvider";
import { skills } from "@/lib/skills";
import Skill from "./Skill";

export default function Skills() {
  const { setToDefault, setToSkills } = useCursor();

  return (
    <div className="flex-1 flex flex-col gap-2">
      <p
        className="font-bold"
        onMouseEnter={setToSkills}
        onMouseLeave={setToDefault}
      >
        My skills
      </p>

      <div className="flex flex-col gap-3">
        {skills.map((category) => (
          <div key={category.label} className="flex flex-col gap-1">
            <div
              className="border-l border-primary w-fit"
              onMouseEnter={setToSkills}
              onMouseLeave={setToDefault}
            >
              <p className="pl-2 font-bold">{category.label}</p>
            </div>
            <div
              className="flex flex-row flex-wrap gap-1 w-fit"
              onMouseEnter={setToSkills}
              onMouseLeave={setToDefault}
            >
              {category.skillsList.map((skill) => (
                <Skill key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
