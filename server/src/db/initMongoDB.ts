import { env } from "../utils/env";
import mongoose from "mongoose";

export const initMongoConnection = async () => {
  try {
    const user = env("MONGODB_USER");
    const password = env("MONGODB_PASSWORD");
    const url = env("MONGODB_URL");
    const db = env("MONGODB_DB");
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Mongodb connection works successfully");
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error connect db ${error.message}`);
    } else {
      console.log("Some unknown error connection database", error);
    }
  }
};
