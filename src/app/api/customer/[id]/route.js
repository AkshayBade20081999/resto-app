import { connectionStr } from "@/src/app/lib/db";
import { foodSchema } from "@/src/app/lib/foodsModel";
import { restaurantSchema } from "@/src/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const id = content.params.id;
  console.log(id);
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const details = await restaurantSchema.findOne({ _id: id });
  const foodItems = await foodSchema.find({ resto_id: id });
  return NextResponse.json({ success: true, details, foodItems });
}
