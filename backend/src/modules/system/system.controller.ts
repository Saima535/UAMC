import type { Request, Response } from "express";
import { getSystemSummary } from "./system.service.js";

// Provide a simple root endpoint to confirm API identity and versioning.
export function getSystemInfo(_request: Request, response: Response) {
  response.status(200).json({
    success: true,
    data: getSystemSummary()
  });
}
