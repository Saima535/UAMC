import dotenv from "dotenv";
import { z } from "zod";

// Load environment variables at the configuration boundary before validation runs.
dotenv.config();

// Validate environment variables centrally so invalid configuration fails fast.
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(5000),
  CLIENT_ORIGIN: z.string().min(1).default("http://localhost:3000"),
  MONGODB_URI: z.string().min(1, "MONGODB_URI is required")
});

const parsedEnv = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN,
  MONGODB_URI: process.env.MONGODB_URI
});

if (!parsedEnv.success) {
  console.error("Invalid environment configuration.", parsedEnv.error.flatten().fieldErrors);
  throw new Error("Environment validation failed.");
}

export const env = parsedEnv.data;
