"use client";

import { useCursor } from "@/context/CursorProvider";
import Skill from "./Skill";
import { trpc } from "@/app/_trpc/client";

export default function Skills() {
  const { setToDefault, setToSkills } = useCursor();
  const { data: skills, isLoading } = trpc.getSkills.useQuery();

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
        {!isLoading &&
          skills &&
          skills.map((category) => (
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
                {category.list.map((skill) => (
                  <Skill key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
