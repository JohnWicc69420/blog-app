import connectMongoDB from "../../../libs/mongodb";
import Blog from "../../../model/blog";
import { NextResponse } from "next/server";

connectMongoDB();

export async function GET() {
  const blogs = await Blog.find();
  return NextResponse.json({ blogs });
}
