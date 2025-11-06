import Link from "next/link";
import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

export default function CourseCard({
  _id,
  name,
  author,
  price,
  handlerFunction,
  buttonText,
  isEnrolled,
}) {
  return (
    <div className="bg-white flex flex-col justify-between gap-4 p-5 m-2 rounded shadow-md hover:shadow-xl transition-all duration-200">
      <div>
        <h1 className="font-bold text-xl mb-1">{name}</h1>
        <h3 className="font-semibold text-gray-500 mb-3">By {author}</h3>
        <div className="flex justify-between items-center mb-4">
          <div className="flex text-yellow-500">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
          </div>
          <p className="font-semibold text-gray-700"></p>
        </div>
      </div>
      {isEnrolled ? (
        <Link
          href={`/course/${_id}`}
          className="w-full outline-none text-[#09887D] text-center border-2 rounded-lg py-2 font-bold border-[#09887D] hover:bg-[#09887D] hover:text-white transition"
        >
          Continue
        </Link>
      ) : (
        <button
          onClick={handlerFunction}
          className="w-full outline-none text-[#09887D] border-2 rounded-lg py-2 font-bold border-[#09887D] hover:bg-[#09887D] hover:text-white transition"
        >
          Enroll
        </button>
      )}
    </div>
  );
}
