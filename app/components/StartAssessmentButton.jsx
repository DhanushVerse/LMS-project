"use client";
import { useRouter } from "next/navigation";

export default function StartAssessmentButton({ courseId }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/assessment/${courseId}`);
  };

  return (
    <button onClick={handleClick}>
      Start Assessment
      </button>
  );
}
