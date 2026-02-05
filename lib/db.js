import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    console.log("A connection already exists.");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (err) {
    console.log("Database Error:", err);
    return err;
  }
}

export default connectDB;
