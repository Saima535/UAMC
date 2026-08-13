import { app } from "./app.js";
import { connectToDatabase } from "./config/database.js";
import { env } from "./config/env.js";

async function bootstrap() {
  // Ensure the database connection is established before the API starts accepting traffic.
  await connectToDatabase();

  app.listen(env.PORT, () => {
    console.log(`Backend server is running on port ${env.PORT}`);
  });
}

bootstrap().catch((error: unknown) => {
  console.error("Failed to start backend server.", error);
  process.exit(1);
});
