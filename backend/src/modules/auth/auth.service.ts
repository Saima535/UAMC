import { env } from "../../config/env.js";
import { createAdminSessionToken } from "../../common/auth/admin-auth.js";

function createHttpError(statusCode: number, message: string) {
  const error = new Error(message) as Error & { statusCode?: number };
  error.statusCode = statusCode;
  return error;
}

export function loginAdmin(email: string, password: string) {
  if (email !== env.AdminEmail || password !== env.AdminPassword) {
    throw createHttpError(401, "Invalid admin credentials.");
  }

  return {
    token: createAdminSessionToken(),
    admin: {
      email: env.AdminEmail
    }
  };
}

export function getAdminProfile() {
  return {
    email: env.AdminEmail
  };
}
