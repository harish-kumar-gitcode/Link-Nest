import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { verifyAuth } from "@/lib/auth";

export async function POST(req) {
  const user = await verifyAuth(req);

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { file } = await req.json();
  try {
    const uploadedProfile = await cloudinary.uploader.upload(file, {
      folder: "agents",
    });

    return NextResponse.json(
      { message: "Uploaded successfully", url: uploadedProfile.secure_url },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "An error occured", err },
      { status: 500 }
    );
  }
}
