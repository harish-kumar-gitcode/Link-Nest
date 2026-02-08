import mongoose from "mongoose";

const AgentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
    },

    number: {
      type: String,
      required: true,
    },

    whatsApp: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Agent || mongoose.model("Agent", AgentSchema);
