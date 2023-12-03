import React from "react";

export default function Skill({ name }: { name: string }) {
  return (
    <div className="text-3xl">
      <div className={`mt-1 px-2 py-1 text-sm bg-primary/30 text-primary`}>
        {name}
      </div>
    </div>
  );
}
