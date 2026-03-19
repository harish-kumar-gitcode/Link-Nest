import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
  name: "String",
  phone: "String",
  email: "String",
  type: {
    type: "String",
    enum: ["Starter", "Professional", "Unlimited"],
  },
});

export default mongoose.models.Plan || mongoose.model("Plan", planSchema);
