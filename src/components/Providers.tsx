import { CursorProvider } from "@/context/CursorProvider";
import React, { ReactNode } from "react";

export default function Providers({ children }: { children?: ReactNode }) {
  return (
    <>
      <CursorProvider>{children}</CursorProvider>
    </>
  );
}
