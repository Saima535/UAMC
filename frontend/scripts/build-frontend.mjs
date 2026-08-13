import { spawn } from "node:child_process";
import { cleanFrontendArtifacts, createNextEnv, getNextBinPath, rootDir } from "./dev-helpers.mjs";

async function main() {
  try {
    await cleanFrontendArtifacts();
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }

  const child = spawn(process.execPath, [getNextBinPath(), "build"], {
    cwd: rootDir,
    env: createNextEnv("production"),
    stdio: "inherit"
  });

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    process.exit(code ?? 0);
  });
}

main().catch((error) => {
  console.error("Frontend build failed.", error);
  process.exit(1);
});
