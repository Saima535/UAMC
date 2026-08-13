import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env.js";
import { notFoundHandler } from "./common/middlewares/not-found.js";
import { errorHandler } from "./common/middlewares/error-handler.js";
import { apiRouter } from "./routes/index.js";

const app = express();

// Apply a minimal security baseline suitable for an API-first backend.
app.use(helmet());

// Restrict cross-origin access to the configured frontend origin.
app.use(
  cors({
    origin: env.CLIENT_ORIGIN,
    credentials: true
  })
);

// Reduce abuse risk with a small global rate limit until feature-specific rules are added.
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false
  })
);

// Keep payload sizes controlled to limit accidental or malicious oversized requests.
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// Use concise request logs during development and production troubleshooting.
app.use(morgan(env.NODE_ENV === "production" ? "combined" : "dev"));

// Mount all feature routes through a single versioned API boundary.
app.use("/api/v1", apiRouter);

// Handle unmatched routes after all mounted features are checked.
app.use(notFoundHandler);

// Handle application errors in one place to avoid leaking implementation details.
app.use(errorHandler);

export { app };
