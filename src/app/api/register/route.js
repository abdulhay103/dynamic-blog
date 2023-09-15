import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req, res) {
  const reqHeader = headers();
  let token = reqHeader.get("token");
  return NextResponse.json({
    status: true,
    msg: "Registration success",
    token: token,
  });
}
