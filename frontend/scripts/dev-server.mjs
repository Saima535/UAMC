import { spawn } from "node:child_process";
import {
  cleanFrontendArtifacts,
  createNextEnv,
  getNextBinPath,
  readActiveLock,
  removeLock,
  rootDir,
  writeLock
} from "./dev-helpers.mjs";

async function main() {
  const activeLock = await readActiveLock();

  if (activeLock) {
    console.error(
      `A frontend dev server is already running (pid ${activeLock.pid}, started ${activeLock.startedAt}). Stop it before starting another one.`
    );
    process.exit(1);
  }

  try {
    await cleanFrontendArtifacts();
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }

  await writeLock();

  const child = spawn(process.execPath, [getNextBinPath(), "dev"], {
    cwd: rootDir,
    env: createNextEnv("development"),
    stdio: "inherit"
  });

  const cleanup = async () => {
    await removeLock();
  };

  process.on("SIGINT", async () => {
    child.kill("SIGINT");
    await cleanup();
    process.exit(0);
  });

  process.on("SIGTERM", async () => {
    child.kill("SIGTERM");
    await cleanup();
    process.exit(0);
  });

  child.on("exit", async (code, signal) => {
    await cleanup();
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }
    process.exit(code ?? 0);
  });
}

main().catch(async (error) => {
  await removeLock();
  console.error("Frontend dev startup failed.", error);
  process.exit(1);
});
