import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Listing from "@/models/listings";
import Agent from "@/models/agent";
import { generateSlug } from "@/lib/slug";

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();

    const {
      title,
      images,
      price,
      length,
      breadth,
      area,
      facing,
      type,
      description,
      location,
      agentPhone,
    } = data;

    // ✅ Find agent by phone
    const agent = await Agent.findOne({ phone: agentPhone });

    if (!agent) {
      return NextResponse.json({ message: "Agent not found" }, { status: 404 });
    }

    const slug = generateSlug(title);

    const newListing = await Listing.create({
      title,
      slug,
      images,
      price,
      length,
      breadth,
      area,
      facing,
      type,
      description,
      location, // { address, lat, lng }
      agent: agent._id,
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
