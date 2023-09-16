import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req, res) {
  const reqJSON = await req.json();
  const { user, email, password } = reqJSON;
  return NextResponse.json({
    status: true,
    msg: "Registration success",
    user: user,
  });
}
