"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import CourseCard from "../components/CourseCard";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Footer from "../components/footer";



const SkeletonCard = () => (
  <div className="bg-white p-4 rounded-lg shadow-md animate-pulse">
    <div className="h-40 bg-gray-300 rounded mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
    <div className="h-8 bg-gray-300 rounded w-full"></div>
  </div>
);

export default function Page() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const getUser = async () => {
      try {
        if (!session?.user?._id) {
          console.warn("Session or user ID not available");
          setLoading(false);
          return;
        }
        const res = await fetch(`/api/user/?id=${session.user._id}`);
        if (!res.ok) {
          console.log("Failed to fetch user. Status:", res.status);
          setLoading(false);
          return;
        }

        const result = await res.json();
        setUser(result.data);
        console.log("Fetched user:", result.data);
      } catch (error) {
        console.log("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      getUser();
    } else {
      setLoading(false);
    }
  }, [session]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/course");
        const data = await res.json();
        setCourses(data.data || []);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const enrollCourse = async (courseId) => {
    if (!session) {
      alert("Please login to enroll in a course.");
      router.push("/login");
      return;
    }

    const userId = session.user._id;

    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, courseId }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Enrolled successfully!");
        window.location.reload();
      } else {
        alert(data.message || "Failed to enroll.");
      }
    } catch (error) {
      console.error("Enroll error:", error);
      alert("Something went wrong while enrolling.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="flex flex-col items-center justify-center mt-2 px-4 bg-gray-100 text-black text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight">
          Explore the Course
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400">
          Learn from the best. Anytime, anywhere.
        </p>
      </div>
      <div className="bg-gray-100 w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          ) : courses.length > 0 ? (
            courses.map((course) => {
              const isEnrolled = user?.enrolledCourses?.includes(course._id);

              return (
                <CourseCard
                  key={course._id}
                  _id={course._id}
                  name={course.title}
                  author={course.instructorName}
                  price={course.price}
                  handlerFunction={() => {
                    enrollCourse(course._id);
                  }}
                  isEnrolled={isEnrolled}
                  buttonText={isEnrolled ? "Continue" : "Enroll"}
                />
              );
            })
          ) : (
            <p className="text-center col-span-full text-gray-600 text-lg font-medium">
              No courses available.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
