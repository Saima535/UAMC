import crypto from "node:crypto";
import type { Request } from "express";
import { env } from "../../config/env.js";

const sessionDurationMs = 1000 * 60 * 60 * 12;

type AdminTokenPayload = {
  email: string;
  exp: number;
};

function getSigningKey() {
  return `${env.AdminEmail}:${env.AdminPassword}:${env.NODE_ENV}`;
}

function encodePayload(payload: AdminTokenPayload) {
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

function decodePayload(encodedPayload: string) {
  const decoded = Buffer.from(encodedPayload, "base64url").toString("utf8");
  return JSON.parse(decoded) as AdminTokenPayload;
}

function signPayload(encodedPayload: string) {
  return crypto.createHmac("sha256", getSigningKey()).update(encodedPayload).digest("base64url");
}

export function createAdminSessionToken() {
  const payload: AdminTokenPayload = {
    email: env.AdminEmail,
    exp: Date.now() + sessionDurationMs
  };

  const encodedPayload = encodePayload(payload);
  const signature = signPayload(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export function verifyAdminSessionToken(token: string) {
  const [encodedPayload, signature] = token.split(".");

  if (!encodedPayload || !signature) {
    return null;
  }

  const expectedSignature = signPayload(encodedPayload);

  if (signature !== expectedSignature) {
    return null;
  }

  try {
    const payload = decodePayload(encodedPayload);

    if (payload.email !== env.AdminEmail || payload.exp < Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function extractBearerToken(request: Request) {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader?.startsWith("Bearer ")) {
    return null;
  }

  return authorizationHeader.slice("Bearer ".length).trim();
}
