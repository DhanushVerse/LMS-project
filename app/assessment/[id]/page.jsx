import { useEffect, useState } from "react";

export default function AssessmentPage({ params }) {
  const [assessment, setAssessment] = useState(null);
  const courseId = params.id;

  useEffect(() => {
    fetch(`/api/assessment/${courseId}`) // Calls your API route
      .then(res => res.json())
      .then(data => setAssessment(data));
  }, [courseId]);

  if (!assessment) return <p>Loading...</p>;

  return (
    <div>
      <h2>Assessment</h2>
      {assessment.questions.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          {q.options.map((option, i) => (
            <label key={i}>
              <input type="radio" name={`q${index}`} value={i} />
              {option}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}
