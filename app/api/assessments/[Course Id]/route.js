// api/assessment/[courseId]/route.js

import { connectDB } from "@/utils/db";
import Assessment from "@/models/Assessment";

export async function GET(req, { params }) {
  await connectDB();
  const { courseId } = params;

  const assessment = await Assessment.findOne({ courseId });
  if (!assessment) {
    return new Response(JSON.stringify({ message: "No assessment found" }), { status: 404 });
  }

  return new Response(JSON.stringify(assessment), { status: 200 });
}


