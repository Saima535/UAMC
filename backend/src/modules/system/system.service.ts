import { env } from "../../config/env.js";

export function getSystemSummary() {
  return {
    application: "uamc-backend",
    environment: env.NODE_ENV,
    apiVersion: "v1"
  };
}
