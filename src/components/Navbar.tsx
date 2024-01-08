"use client";

import { useCursor } from "@/context/CursorProvider";
import React from "react";

export default function Navbar() {
  const { setToLink, setToDefault } = useCursor();
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <nav className="fixed bg-black/30 pb-2 w-full backdrop-blur-md z-10">
      <div className="mx-12 pb-2 xl:mx-auto max-w-7xl">
        <p
          className="text-white font-bold mt-4"
          onMouseEnter={setToLink}
          onMouseLeave={setToDefault}
          onClick={toTop}
        >
          Diana Kosovan
        </p>
      </div>
    </nav>
  );
}
