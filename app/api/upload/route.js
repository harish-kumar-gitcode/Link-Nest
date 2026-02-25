import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

// To get the urls by uploading the images to cloudinary.
export async function POST(req) {
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
