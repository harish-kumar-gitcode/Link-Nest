import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";

export async function POST(req) {
  const user = await verifyAuth(req);

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { image } = await req.json();

  const publicId = image
    .split("/upload/")[1]
    .replace(/v\d+\//, "")
    .replace(/\.[^/.]+$/, "");

  console.log(publicId);

  try {
    const removed = await cloudinary.uploader.destroy(publicId);

    return NextResponse.json(removed);
  } catch (err) {
    console.log("Deletion Error:", err);
    return NextResponse.json({ message: "An error occured, try again later." });
  }
}
