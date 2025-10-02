import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/src/app/lib/db";
import { foodSchema } from "@/src/app/lib/foodsModel";

export async function POST(request) {
  const payload = await request.json();
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const food = new foodSchema(payload);
  const result = await food.save();
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}
