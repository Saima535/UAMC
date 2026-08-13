import { cleanFrontendArtifacts, readActiveLock } from "./dev-helpers.mjs";

async function main() {
  const activeLock = await readActiveLock();

  if (activeLock) {
    console.error(
      `Cannot reset frontend artifacts while the dev server is running (pid ${activeLock.pid}, started ${activeLock.startedAt}). Stop it first.`
    );
    process.exit(1);
  }

  try {
    await cleanFrontendArtifacts();
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Frontend reset failed.", error);
  process.exit(1);
});
