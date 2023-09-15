import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JsonBody = await req.json();
  let user = JsonBody["user"];
  let email = JsonBody["email"];
  let password = JsonBody["password"];
  return NextResponse.json({
    status: true,
    msg: "Login Success",
    user: user,
    email: email,
    password: password,
  });
}
