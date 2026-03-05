import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import agent from "@/models/agent";
import { verifyAuth } from "@/lib/auth";

// Route to FETCH Agent
export async function GET(request) {
  try {
    await connectDB();
    const user = await verifyAuth(request);

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const agentFound = await agent.find({});

    return NextResponse.json(agentFound, { status: 200 });
  } catch (err) {
    console.log("Agent fetch Error:", err);
    return NextResponse.json({ message: "An error occured." }, { status: 500 });
  }
}

// Route to CREATE Agent
export async function POST(req) {
  const user = await verifyAuth(req);

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const data = await req.json();

    if (
      !data.name ||
      !data.number ||
      !data.whatsApp ||
      !data.status ||
      !data.plan
    )
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );

    // Checking if the agent already exists.
    const existingAgent = await agent.findOne({ number: data.number });

    if (existingAgent) {
      return NextResponse.json(
        { message: "An agent already exists" },
        { status: 403 }
      );
    }

    //Saving the agent.
    const newAgent = await agent.create({
      name: data.name,
      number: data.number,
      image: data.image,
      whatsApp: data.whatsApp,
      status: data.status,
    });

    return NextResponse.json(
      { message: "Agent created successfully", newAgent },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
