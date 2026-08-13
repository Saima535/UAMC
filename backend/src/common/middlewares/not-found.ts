import type { NextFunction, Request, Response } from "express";

// Return a consistent response for unknown routes after all feature routers are exhausted.
export function notFoundHandler(request: Request, _response: Response, next: NextFunction) {
  const error = new Error(`Route not found: ${request.method} ${request.originalUrl}`) as Error & {
    statusCode?: number;
  };

  error.statusCode = 404;
  next(error);
}
