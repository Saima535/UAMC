import type { Request, Response } from "express";
import { z } from "zod";
import { getAdminProfile, loginAdmin } from "./auth.service.js";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

export function loginAdminHandler(request: Request, response: Response) {
  const payload = loginSchema.parse(request.body);
  const session = loginAdmin(payload.email, payload.password);

  response.status(200).json({
    success: true,
    data: session
  });
}

export function getAdminProfileHandler(_request: Request, response: Response) {
  response.status(200).json({
    success: true,
    data: getAdminProfile()
  });
}
