import connectDB from "@/lib/db";
import listings from "@/models/listings";
import { NextResponse } from "next/server";
import agent from "@/models/agent";
import mongoose from "mongoose";
import { verifyAuth } from "@/lib/auth";

//Fetching the property using ID.
export async function GET(req, { params }) {
  const user = await verifyAuth(req);

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  await connectDB();
  const { id } = await params;

  const property = await listings.findById(id).populate("agent");

  if (!property) {
    return NextResponse.json(
      { message: "No property found." },
      { status: 404 }
    );
  }

  return NextResponse.json(property);
}

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    // Validate Mongo ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid Property ID" },
        { status: 400 }
      );
    }

    const body = await req.json();

    const updatedProperty = await listings.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProperty) {
      return NextResponse.json(
        { success: false, message: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedProperty,
    });
  } catch (error) {
    console.error("PUT Property Error:", error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
