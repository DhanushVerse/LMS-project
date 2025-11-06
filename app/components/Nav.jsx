"use client";
import React, { useMemo, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Nav() {
  const { data: session } = useSession();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const role = useMemo(() => session?.user?.role, [session]);

  const handleClick = () => {
    if (role === "student") {
      router.push("/dashboard");
    } else if (role === "instructor") {
      router.push("/dashboard/instructor");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-[#b0d0d79c] px-4 md:px-8 py-4 flex md:flex-row items-center justify-between">
      <div className="text-center md:text-left">
        <h1 className="text-white font-extrabold text-2xl md:text-3xl">
          FURIOUS LEARNERS
        </h1>
        <h3 className="text-white text-sm md:text-lg">
          ONLINE EDUCATION & LEARNING
        </h3>
      </div>

      <nav className="hidden md:flex items-center space-x-6 text-white text-base font-medium">
        <Link className="hover:text-[#09887D] transition-all" href="/">
          Home
        </Link>
        <Link className="hover:text-[#09887D] transition-all" href="/course">
          All Courses
        </Link>
        <Link className="hover:text-[#09887D] transition-all" href="/contact">
          Contact
        </Link>
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <div className="flex space-x-3 text-white">
          <a href="https://www.facebook.com/share/1AKyjmuCvQ/">
            <FaFacebook className="cursor-pointer hover:text-[#09887D] text-2xl" />
          </a>
          <a href="https://www.instagram.com/shanmughainstitutions">
            <FaInstagram className="cursor-pointer hover:text-[#09887D] text-2xl" />
          </a>
          <a href="https://twitter.com/srishanmugha">
            <FaTwitter className="cursor-pointer hover:text-[#09887D] text-2xl" />
          </a>
          <a href="https://youtube.com/@srishanmughaeducationalins5812?feature=shared">
            <BsYoutube className="cursor-pointer hover:text-[#09887D] text-2xl" />
          </a>
        </div>
        {session ? (
          <>
            <button
              className="bg-[#0AA89D] text-white px-4 py-2 rounded-md hover:bg-[#09887D]"
              onClick={handleClick}
            >
              Profile
            </button>
            <button
              className="bg-[#0AA89D] text-white px-4 py-2 rounded-md hover:bg-[#09887D]"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/auth/signin"
            className="bg-[#0AA89D] text-white px-4 py-2 rounded-md hover:bg-[#09887D]"
          >
            Login
          </Link>
        )}
      </div>

      <div className="md:hidden mt-4">
        <button onClick={toggleMobileMenu} className="text-white text-3xl">
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          key="mobile-menu"
          className="flex flex-col w-full mt-4 gap-4 text-white md:hidden transition-all duration-300"
        >
          <Link
            className="hover:text-[#09887D] transition-all"
            href="/"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            className="hover:text-[#09887D] transition-all"
            href="/course"
            onClick={toggleMobileMenu}
          >
            All Courses
          </Link>
          <Link
            className="hover:text-[#09887D] transition-all"
            href="/contact"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>

          <div className="flex gap-3 mt-2">
            <FaFacebook className="text-2xl hover:text-[#09887D]" />
            <FaInstagram className="text-2xl hover:text-[#09887D]" />
            <FaTwitter className="text-2xl hover:text-[#09887D]" />
            <BsYoutube className="text-2xl hover:text-[#09887D]" />
          </div>

          {session ? (
            <button
              className="bg-[#0AA89D] text-white px-4 py-2 rounded-md hover:bg-[#09887D]"
              onClick={() => {
                handleClick();
                toggleMobileMenu();
              }}
            >
              Profile
            </button>
          ) : (
            <Link
              href="/auth/signin"
              className="bg-[#0AA89D] text-white px-4 py-2 rounded-md hover:bg-[#09887D]"
              onClick={toggleMobileMenu}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
