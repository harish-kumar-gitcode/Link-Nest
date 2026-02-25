import { signToken, verifyToken } from "@/lib/auth";
import { NextResponse } from "next/server";

//Verifying creds and cerating session.
export async function POST(req) {
  const { email, pass } = await req.json();

  const regEmail = [
    "harish123venkat@gmail.com",
    "info@linknest.co.in",
    "admin@linknest.co.in",
  ];

  const regPass = "admin@link-nest26";

  if (regEmail.includes(email) && pass === regPass) {
    const payload = { email };
    const token = signToken(payload);

    return NextResponse.json(
      {
        message: "Logged in",
        status: 200,
      },
      {
        headers: {
          "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=604800`,
        },
      }
    );
  } else {
    return NextResponse.json(
      { message: "Invalid Credentials" },
      {
        status: 401,
        headers: {
          "Set-Cookie": `token=; HttpOnly; Path=/; Max-Age=0`,
        },
      }
    );
  }
}
