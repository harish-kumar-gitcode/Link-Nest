import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import plan from "@/models/plan";

export async function POST(req) {
  const data = await req.json();

  try {
    await connectDB();
    const newPlan = await plan.create({
      name: data.name,
      phone: data.phone,
      email: data.email,
      type: data.plan,
    });

    return NextResponse.json({ message: "Success", newPlan }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}
