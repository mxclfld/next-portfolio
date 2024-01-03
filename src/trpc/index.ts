import { publicProcedure, router } from "./trpc";
import { db } from "@/lib/prisma";

export const appRouter = router({
  getProjectsWithImg: publicProcedure.query(async () => {
    return await db.project.findMany({
      where: {
        NOT: {
          img: null,
        },
      },
    });
  }),

  getProjectsWithoutImg: publicProcedure.query(async () => {
    return await db.project.findMany({
      where: {
        img: null,
      },
    });
  }),
});

export type AppRouter = typeof appRouter;
