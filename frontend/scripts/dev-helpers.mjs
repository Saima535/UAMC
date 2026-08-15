import fs from "node:fs/promises";
import path from "node:path";

export const rootDir = process.cwd();
export const lockFilePath = path.join(rootDir, ".frontend-dev.lock");
export const nextRuntimeEnvVar = "UAMC_NEXT_RUNTIME";
export const distDirs = {
  development: ".next-development",
  production: ".next",
  legacy: ".next-production"
};
const cleanupTargets = [distDirs.legacy, distDirs.development, distDirs.production, "dev-smoke.log"];

export async function fileExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

export function isProcessAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

export async function readActiveLock() {
  if (!(await fileExists(lockFilePath))) {
    return null;
  }

  try {
    const raw = await fs.readFile(lockFilePath, "utf8");
    const parsed = JSON.parse(raw);
    if (typeof parsed?.pid !== "number") {
      return null;
    }

    if (!isProcessAlive(parsed.pid)) {
      await fs.rm(lockFilePath, { force: true });
      return null;
    }

    return parsed;
  } catch {
    await fs.rm(lockFilePath, { force: true });
    return null;
  }
}

export async function writeLock() {
  const payload = {
    pid: process.pid,
    startedAt: new Date().toISOString(),
    cwd: rootDir
  };

  await fs.writeFile(lockFilePath, JSON.stringify(payload, null, 2), "utf8");
}

export async function removeLock() {
  await fs.rm(lockFilePath, { force: true });
}

export async function cleanFrontendArtifacts() {
  for (const target of cleanupTargets) {
    const targetPath = path.join(rootDir, target);
    try {
      await fs.rm(targetPath, { recursive: true, force: true });
      console.log(`Removed ${path.basename(targetPath)}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Could not remove ${path.basename(targetPath)}: ${message}`);
    }
  }
}

export function createNextEnv(mode) {
  return {
    ...process.env,
    [nextRuntimeEnvVar]: mode
  };
}

export function getNextBinPath() {
  return path.join(rootDir, "node_modules", "next", "dist", "bin", "next");
}
