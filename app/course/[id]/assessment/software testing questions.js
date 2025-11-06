// // app/course/[id]/page.js or pages/course/[id].js
// // import Link from 'next/link';


// export default async function CourseDetails({ params }) {
//   const courseId = params.id; // Only for App Router (app/)
//   // For pages/, you might get it via getServerSideProps or useRouter()

//   return (
//     <div>
//       <h1>Assessment for course ID: {courseId}</h1>

//       {/* <Link href={`/course/${courseId}/assessment`}>Go to Assessment</Link> */}
//     </div>
//   );
// }
//jkhjkhjk

// app/course/[id]/assessment/page.js

// app/assessment/page.jsx
'use client';
import { useState } from 'react';

const sampleAssessment = {
  title: "Software Testing Fundamentals",
  id: st125,

  questions: [
    {
      question: "1. What is the main goal of software testing?",
      options: ["To develop code", "To identify bugs", "To compile programs", "To write documentation"],
      answer: "To identify bugs",
    },
    {
      question: "2. What is black-box testing?",
      options: ["Testing internal code logic", "Testing with access to source code", "Testing without internal knowledge", "Unit testing"],
      answer: "Testing without internal knowledge",
    },
    {
      question: "3. Which tool is commonly used for automation testing?",
      options: ["Photoshop", "Selenium", "Notepad", "Excel"],
      answer: "Selenium",
    },
    {
      question: "4. What does regression testing ensure?",
      options: ["Only UI is tested", "Database is functional", "Old functionalities work after changes", "Build is successful"],
      answer: "Old functionalities work after changes",
    },
    {
      question: "5. What is unit testing?",
      options: ["Testing the entire system", "Testing only UI", "Testing individual components", "Testing with users"],
      answer: "Testing individual components",
    },
    {
      question: "6. What is the purpose of integration testing?",
      options: ["To test business logic", "To test UI responsiveness", "To test module interactions", "To test deployment scripts"],
      answer: "To test module interactions",
    },
    {
      question: "7. What is the correct lifecycle of a bug?",
      options: ["New → Open → Closed", "New → Assigned → Open → Fixed → Retest → Closed", "Reported → Deleted", "Open → Reviewed → Deleted"],
      answer: "New → Assigned → Open → Fixed → Retest → Closed",
    },
    {
      question: "8. Which of the following is a type of non-functional testing?",
      options: ["Unit testing", "Performance testing", "Integration testing", "Regression testing"],
      answer: "Performance testing",
    },
    {
      question: "9. What is static testing?",
      options: ["Testing performed after code is run", "Testing performed without executing code", "Testing by users", "Integration testing"],
      answer: "Testing performed without executing code",
    },
    {
      question: "10. What is alpha testing?",
      options: ["Done by end-users", "Done by developers before release", "Live environment testing", "Unit level testing"],
      answer: "Done by developers before release",
    },
    {
      question: "11. What is beta testing?",
      options: ["Internal only", "Post-release testing", "Testing by real users in a controlled environment", "Static testing"],
      answer: "Testing by real users in a controlled environment",
    },
    {
      question: "12. What is exploratory testing?",
      options: ["Scripted testing", "Testing with predefined inputs", "Ad-hoc testing by exploring the system", "Regression testing"],
      answer: "Ad-hoc testing by exploring the system",
    },
    {
      question: "13. What is smoke testing?",
      options: ["Detailed testing", "Final testing", "Basic testing to verify builds", "Integration testing"],
      answer: "Basic testing to verify builds",
    },
    {
      question: "14. Which is NOT a level of testing?",
      options: ["Unit Testing", "System Testing", "Random Testing", "Integration Testing"],
      answer: "Random Testing",
    },
    {
      question: "15. What is the result of a passed test case?",
      options: ["Bug report", "Error log", "Validation success", "Retest required"],
      answer: "Validation success",
    },
    {
      question: "16. What is boundary value analysis?",
      options: ["Testing inside the code", "Testing near edge input values", "Load testing", "GUI testing"],
      answer: "Testing near edge input values",
    },
    {
      question: "17. What is test coverage?",
      options: ["UI coverage", "Documentation level", "How much code is tested", "Performance speed"],
      answer: "How much code is tested",
    },
  ],
};

export default function AssessmentPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === sampleAssessment.questions[current].answer) {
      setScore(score + 1);
    }
    setSelected('');
    if (current + 1 < sampleAssessment.questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="p-5">
        <h2 className="text-2xl font-bold">Assessment Completed!</h2>
        <p className="mt-2">Your Score: {score} / {sampleAssessment.questions.length}</p>
      </div>
    );
  }

  const q = sampleAssessment.questions[current];

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">{sampleAssessment.title}</h1>
      <div className="bg-white shadow-md rounded p-4">
        <p className="mb-3 font-medium">{q.question}</p>
        {q.options.map((opt) => (
          <div key={opt} className="mb-2">
            <label className="cursor-pointer">
              <input
                type="radio"
                name={`question-${current}`}
                value={opt}
                checked={selected === opt}
                onChange={() => setSelected(opt)}
                className="mr-2"
              />
              {opt}
            </label>
          </div>
        ))}
        <button
          onClick={handleNext}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          disabled={!selected}
        >
          {current === sampleAssessment.questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}


