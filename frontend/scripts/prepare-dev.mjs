import fs from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const targets = [".next", "dev-smoke.log"];

async function removeTarget(targetPath) {
  try {
    await fs.rm(targetPath, { recursive: true, force: true });
    console.log(`Removed ${path.basename(targetPath)}`);
    return true;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`Could not remove ${path.basename(targetPath)}: ${message}`);
    return false;
  }
}

async function main() {
  let nextDirectoryCleaned = true;

  for (const target of targets) {
    const cleaned = await removeTarget(path.join(rootDir, target));
    if (target === ".next") {
      nextDirectoryCleaned = cleaned;
    }
  }

  if (!nextDirectoryCleaned) {
    console.error(
      "Could not clear .next. Stop any running frontend dev server or node process that is locking frontend/.next, then run the command again."
    );
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Frontend dev preparation failed.", error);
  process.exit(1);
});
