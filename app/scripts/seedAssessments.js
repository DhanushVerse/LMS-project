import mongoose from "mongoose";
import Assessment from "../models/Assessment.js"; // Adjust path if needed
import { connectDB } from "../utils/db.js"; // Your DB connection

const seed = async () => {
  await connectDB();

  const assessments = [
    {
      courseId: "662c1234567890abcdef1234", // Python
      questions: [
        {
          question: "What is the output of print(2 ** 3)?",
          options: ["5", "6", "8", "9"],
          correctAnswer: 2
        },
        // Add more questions here
      ]
    },
    {
      courseId: "662c9999999990abcdef2222", // Software Testing
      questions: [
        {
          question: "Which type of testing is done without executing code?",
          options: ["Black-box testing", "White-box testing", "Static testing", "Unit testing"],
          correctAnswer: 2
        },
        // Add more...
      ]
    },
    {
      courseId: "662c8888888880abcdef3333", // Computer Networks
      questions: [
        {
          question: "Which device connects different networks together?",
          options: ["Switch", "Hub", "Router", "Bridge"],
          correctAnswer: 2
        },
        // Add more...
      ]
    }
  ];

  await Assessment.insertMany(assessments);
  console.log("Assessments seeded!");
  process.exit();
};

seed();
