import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { getListingbySlug } from "@/lib/listings";
import { verifyAuth } from "@/lib/auth";

//GET Method to send client
export async function GET(req, { params }) {
  const user = await verifyAuth(req);

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  const { slug } = await params;

  if (!slug) {
    return NextResponse.json(
      { message: "Slug not provided." },
      { status: 400 }
    );
  }

  const listing = await getListingbySlug(slug);

  if (!listing) {
    return NextResponse.json({ message: "No listing found" }, { status: 404 });
  }
  return NextResponse.json({ listing }, { status: 200 });
}
