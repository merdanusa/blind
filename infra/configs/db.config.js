import { configDotenv } from "dotenv";
configDotenv();
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export default async function connectDb() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected!");
  } catch (error) {
    console.log("Database connection error:", error);
    process.exit(1);
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});
