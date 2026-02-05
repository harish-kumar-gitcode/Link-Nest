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
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Listing ||
  mongoose.model("Listing", listingSchema);
