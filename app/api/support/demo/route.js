import demoRequest from "@/models/demo-request";
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  try {
    const newRequest = await demoRequest.create({
      name: data.name,
      phone: data.phone,
      email: data.email,
      date: data.date,
      time: data.time,
      type: data.type,
    });

    return NextResponse.json(
      { message: "Request saved successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
