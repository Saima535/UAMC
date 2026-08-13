import { Router } from "express";
import { healthRouter } from "../modules/health/health.route.js";
import { systemRouter } from "../modules/system/system.route.js";

const apiRouter = Router();

// This is the mother router. Mount all feature routers here to keep startup clean.
apiRouter.use("/", systemRouter);
apiRouter.use("/health", healthRouter);

export { apiRouter };
