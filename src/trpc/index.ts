import { z } from "zod";
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";

export const appRouter = router({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
