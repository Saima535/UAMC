import type { NextFunction, Request, Response } from "express";
import { extractBearerToken, verifyAdminSessionToken } from "../auth/admin-auth.js";

export function requireAdminAuth(request: Request, _response: Response, next: NextFunction) {
  const token = extractBearerToken(request);

  if (!token || !verifyAdminSessionToken(token)) {
    const error = new Error("Unauthorized.") as Error & { statusCode?: number };
    error.statusCode = 401;
    next(error);
    return;
  }

  next();
}
