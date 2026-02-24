import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
};

export default connectDatabase;