//This route is only for POST
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Listings from "@/models/listings";
import { generateSlug } from "@/lib/slug";

export async function POST(req) {
  try {
    await connectDB();

    //Collecting Data.
    const data = await req.json();

    //Destructuring data.
    const { title, images, price, length, breadth, area, facing } = data;
    const slug = generateSlug(title);

    //Saving data.
    const newListing = await Listings.create({
      title,
      slug,
      images,
      price,
      length,
      breadth,
      area,
      facing,
    });

    return NextResponse.json(
      { message: "Listing saved successfully.", newListing },
      { status: "201" }
    );
  } catch (err) {
    console.log("POST listing err:", err);
    return NextResponse.json(
      { message: "A unexpected error occured", err },
      { status: "500" }
    );
  }
}
