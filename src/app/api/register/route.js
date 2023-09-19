import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcrypt";

export async function POST(req, res) {
  const reqJSON = await req.json();
  const { name, email, password } = reqJSON;

  // DB Connect
  await dbConnect();

  try {
    // find exixting User
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          msg: "Email already exists",
        },
        { status: 409 }
      );
    } else {
      await new User({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      }).save();

      return NextResponse.json({
        status: true,
        msg: "Registration success",
      });
    }
  } catch (error) {
    return NextResponse.json(
      {
        msg: "Server error. Try again",
      },
      { status: 500 }
    );
  }
}
