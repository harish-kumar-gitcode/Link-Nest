//This is used to fetch listings from DB
import connectDB from "./db";
import Listings from "@/models/listings";

export async function getListingbySlug(slug) {
  await connectDB();

  //Sending the data.
  return Listings.findOne({ slug });
}
