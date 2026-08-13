import { Router } from "express";
import { getSystemInfo } from "./system.controller.js";

const systemRouter = Router();

// Keep system-level informational endpoints separate from domain modules.
systemRouter.get("/", getSystemInfo);

export { systemRouter };
