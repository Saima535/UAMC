import { Router } from "express";
import { requireAdminAuth } from "../../common/middlewares/require-admin-auth.js";
import { getAdminProfileHandler, loginAdminHandler } from "./auth.controller.js";

const authRouter = Router();

authRouter.post("/login", loginAdminHandler);
authRouter.get("/me", requireAdminAuth, getAdminProfileHandler);

export { authRouter };
