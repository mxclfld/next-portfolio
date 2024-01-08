"use client";

import { trpc } from "@/app/_trpc/client";
import { CursorProvider } from "@/context/CursorProvider";
import { absoluteUrl } from "@/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { ReactNode, useState } from "react";

export default function Providers({ children }: { children?: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: absoluteUrl("/api/trpc"),
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <CursorProvider>{children}</CursorProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
