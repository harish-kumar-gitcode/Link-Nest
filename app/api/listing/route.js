import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Listing from "@/models/listings";
import { generateSlug } from "@/lib/slug";
import { verifyAuth } from "@/lib/auth";

export async function POST(req) {
  const user = await verifyAuth(req);

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    await connectDB();

    const data = await req.json();

    const newListing = await Listing.create({
      title: data.title,
      slug: generateSlug(data.title),
      images: data.images,
      price: data.price,
      length: data.length,
      breadth: data.breadth,
      area: data.area,
      facing: data.facing,
      type: data.type,
      desc: data.description,
      location: {
        area: data.location.area,
        address: data.location.address,
        lat: data.location.lat,
        lng: data.location.lng,
      },
      status: "Active",
      agent: data.agentId,
    });

    return NextResponse.json(
      { message: "Listing saved successfully", newListing },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST listing error:", err);

    return NextResponse.json(
      { message: "Unexpected error occurred", error: err.message },
      { status: 500 }
    );
  }
}
