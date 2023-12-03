import connectMongoDB from "../../../libs/mongodb";
import Blog from "../../../model/blog";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find();
  return NextResponse.json({ blogs });
}
