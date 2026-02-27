import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import agent from "@/models/agent";

export async function GET() {
  try {
    await connectDB();

    const agentFound = await agent.find({});

    return NextResponse.json(agentFound, { status: 200 });
  } catch (err) {
    console.log("Agent fetch Error:", err);
    return NextResponse.json({ message: "An error occured." }, { status: 500 });
  }
}
