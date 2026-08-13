import type { Request, Response } from "express";
import { getHealthSnapshot } from "./health.service.js";

// Keep HTTP concerns in the controller and pure health data in the service layer.
export function getHealth(_request: Request, response: Response) {
  response.status(200).json({
    success: true,
    data: getHealthSnapshot()
  });
}
