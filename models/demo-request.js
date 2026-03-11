import mongoose from "mongoose";

const demoSchema = new mongoose.Schema({
  name: "String",
  phone: "String",
  email: "String",
  date: "String",
  time: "String",
  type: "String",
});

export default mongoose.models.demoRequest ||
  mongoose.model("demoRequest", demoSchema);
