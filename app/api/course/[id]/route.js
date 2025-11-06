import Course from "@/app/models/Course";
import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  await connectDB();

  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: "Missing course ID" }, { status: 400 });
  }

  const { title, content, youtubeUrl, order } = await req.json();

  const newModule = {
    title,
    content,
    youtubeUrl,
    order,
  };

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { $push: { modules: newModule } },
      { new: true }
    );

    if (!updatedCourse) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Module added successfully", course: updatedCourse },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req, { params }) {
  await connectDB();

  const id = params.id; // ✅ No "await" here!

  if (!id) {
    return NextResponse.json({ error: "Missing course ID" }, { status: 400 });
  }

  try {
    const course = await Course.findById(id);
    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({ course }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
