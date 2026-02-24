import mongoose from "mongoose";

export const connectDatabase = async (mongoURI) => {
  try {
    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(mongoURI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};