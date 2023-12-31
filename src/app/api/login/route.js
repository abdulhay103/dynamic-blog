import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JsonBody = await req.json();
  let { email, password } = JsonBody;

  return NextResponse.json({
    status: true,
    msg: "Login Success",
    email: email,
    password: password,
  });
}
