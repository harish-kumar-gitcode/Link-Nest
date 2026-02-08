//This is used to fetch listings from DB
import connectDB from "./db";
import Listings from "@/models/listings";
import agent from "@/models/agent";

export async function getListingbySlug(slug) {
  await connectDB();

  const listing = Listings.findOne({ slug }).populate("agent").lean();

  //Sending the data.
  return listing;
}
