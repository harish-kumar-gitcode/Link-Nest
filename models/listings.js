import mongoose from "mongoose";
//Listings Model
const listingSchema = new mongoose.Schema(
  {
    title: "String",
    slug: "String",
    images: ["String"],
    price: "Number",
    length: "String",
    breadth: "String",
    area: "String",
    facing: "String",
    location: {
      area: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
    desc: "String",
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
    },
    status: {
      enum: ["active", "suspended", "deleted"],
      type: "String",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Listing ||
  mongoose.model("Listing", listingSchema);
