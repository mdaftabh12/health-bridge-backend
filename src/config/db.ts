import mongoose from "mongoose";

// Connection URI (Example: Local MongoDB)
const uri : string = process.env.MONGO_URI!;

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB successfully");
  } catch (error : any) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
}

export default connectDB;
