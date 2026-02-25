import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import listings from "@/models/listings";
import agent from "@/models/agent";

//To find listings using title.
export async function GET(req) {
  try {
    connectDB();
    const search = req.nextUrl.searchParams.get("search")?.trim();

    let filter = {};

    if (search && search.trim() != "") {
      filter = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { slug: { $regex: search } },
        ],
      };
    }

    const properties = await listings.find(filter).populate("agent");
    return NextResponse.json(properties);
  } catch (err) {
    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}
