import { Router } from "express";
import { getHealth } from "./health.controller.js";

const healthRouter = Router();

// Expose a lightweight readiness endpoint for monitoring and deployment checks.
healthRouter.get("/", getHealth);

export { healthRouter };
