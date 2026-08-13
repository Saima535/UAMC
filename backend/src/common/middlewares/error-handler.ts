import type { NextFunction, Request, Response } from "express";

type ErrorWithStatus = Error & {
  statusCode?: number;
};

// Normalize thrown errors into a predictable API response shape.
export function errorHandler(error: ErrorWithStatus, _request: Request, response: Response, _next: NextFunction) {
  const statusCode = error.statusCode ?? 500;
  const message = statusCode >= 500 ? "Internal server error." : error.message;

  response.status(statusCode).json({
    success: false,
    message
  });
}
