'use client';
import { useState } from 'react';

const sampleAssessment1 = {
    title: "Python",
    id: py213,

    questions: [
        {
            question: "What is the output of print(2 ** 3)?",
            options: ["5", "6", "8", "9"],
            correctAnswer: 2
        },
        {
            question: "Which of the following is a valid variable name in Python?",
            options: ["1var", "var_1", "var-1", "var 1"],
            correctAnswer: 1
        },
        {
            question: "What is the output of print(type([]))?",
            options: ["<class 'list'>", "<class 'dict'>", "<class 'tuple'>", "<class 'set'>"],
            correctAnswer: 0
        },
        {
            question: "What does the len() function return?",
            options: ["Length of a number", "Length of a string/list", "Size in bytes", "Nothing"],
            correctAnswer: 1
        },
        {
            question: "What is the result of 10 // 3 in Python?",
            options: ["3", "3.33", "3.0", "Error"],
            correctAnswer: 0
        },
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["function", "def", "define", "fun"],
            correctAnswer: 1
        },
        {
            question: "What is the output of print('Hello' + 'World')?",
            options: ["Hello World", "Hello+World", "HelloWorld", "Error"],
            correctAnswer: 2
        },
        {
            question: "Which data type is immutable in Python?",
            options: ["List", "Dictionary", "Tuple", "Set"],
            correctAnswer: 2
        },
        {
            question: "How do you start a comment in Python?",
            options: ["//", "/*", "#", "<!--"],
            correctAnswer: 2
        },
        {
            question: "Which of these is used to handle exceptions?",
            options: ["try-except", "catch", "error", "trap"],
            correctAnswer: 0
        },
        {
            question: "Which operator is used for comparison?",
            options: ["=", "==", "===", "!="],
            correctAnswer: 1
        },
        {
            question: "Which loop runs at least once even if the condition is false?",
            options: ["for", "while", "do-while", "None of these"],
            correctAnswer: 2
        },
        {
            question: "Which keyword is used to create a class?",
            options: ["def", "func", "class", "struct"],
            correctAnswer: 2
        },
        {
            question: "What is the output of bool('False')?",
            options: ["False", "True", "None", "Error"],
            correctAnswer: 1
        },
        {
            question: "What is the output of: print(3 * '7')?",
            options: ["21", "777", "Error", "73"],
            correctAnswer: 1
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
