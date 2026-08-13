import { spawn } from "node:child_process";
import { createNextEnv, getNextBinPath, rootDir } from "./dev-helpers.mjs";

async function main() {
  const child = spawn(process.execPath, [getNextBinPath(), "start"], {
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
  console.error("Frontend start failed.", error);
  process.exit(1);
});
