import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";

// To get the urls by uploading the images to cloudinary.
export async function POST(req) {
  const user = await verifyAuth(req);

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { file } = await req.json();

  try {
    const uploaded = await cloudinary.uploader.upload(file, {
      folder: "properties",
    });

    return NextResponse.json(
      {
        message: "Uploaded successfully",
        url: uploaded.secure_url,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Upload failed",
        err,
      },
      {
        status: 500,
      }
    );
  }
}
