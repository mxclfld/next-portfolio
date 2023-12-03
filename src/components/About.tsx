"use client";

import { useCursor } from "@/context/CursorProvider";
import React from "react";

export default function About() {
  const { setToDefault, setToText } = useCursor();

  return (
    <div className="flex-1 text-primary mix-blend-difference">
      <div className="flex flex-col gap-4">
        <p onMouseEnter={setToText} onMouseLeave={setToDefault}>
          I focus on both front-end and back-end work. Detail-oriented and
          responsible and proficient in React, I emphasize clean and
          maintainable code through reusable modules.
        </p>

        <p onMouseEnter={setToText} onMouseLeave={setToDefault}>
          I specialize in enhancing user experiences through meticulous
          interface improvements, implementing innovative features, and
          skillfully resolving complex bugs. My dedication to crafting robust
          solutions reflects my passion for delivering high-impact, innovative
          products.
        </p>

        <p onMouseEnter={setToText} onMouseLeave={setToDefault}>
          My goal is to continue making meaningful contributions, grow as a
          specialist, and tackle challenging problems to create valuable
          products.
        </p>
      </div>
    </div>
  );
}
