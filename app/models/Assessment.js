// models/Assessment.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: Number, // Index of the correct option
});

const assessmentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  questions: [questionSchema],
});

export default mongoose.models.Assessment || mongoose.model("Assessment", assessmentSchema);
