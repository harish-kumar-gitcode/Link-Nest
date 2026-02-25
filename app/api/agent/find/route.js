import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import agent from "@/models/agent";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { phone } = body;

    if (!phone)
      return NextResponse.json(
        { message: "No phone number entered" },
        { status: 400 }
      );

    const matchedAgent = await agent.findOne({ number: phone });

    if (!matchedAgent) {
      return NextResponse.json({ message: "No match found" }, { status: 201 });
    }

    return NextResponse.json(
      { name: matchedAgent.name, _id: matchedAgent._id },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
