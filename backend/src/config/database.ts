import mongoose from "mongoose";
import { env } from "./env.js";

// Keep database connection logic isolated from HTTP bootstrapping for clarity and reuse.
export async function connectToDatabase() {
  await mongoose.connect(env.MONGODB_URI);
  console.log("MongoDB connection established.");
}
