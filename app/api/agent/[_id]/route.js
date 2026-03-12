import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import agent from "@/models/agent";
import { verifyAuth } from "@/lib/auth";

// Fetch agent by ID.
export async function GET(req, { params }) {
  const { _id } = await params;
  try {
    connectDB();
    const user = await verifyAuth(req);

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const matchedAgent = await agent.findById({ _id });
    return NextResponse.json(
      { message: "Agent found", matchedAgent },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
