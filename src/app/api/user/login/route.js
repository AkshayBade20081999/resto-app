import { connectionStr } from "@/src/app/lib/db";
import { userSchema } from "@/src/app/lib/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const result = await userSchema.findOne({
    email: payload.email,
    password: payload.password,
  });
  if (result) success = true;
  return NextResponse.json({ result, success });
}
