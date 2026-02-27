import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.log("Database Error:", err);
    return err;
  }
}

export default connectDB;
