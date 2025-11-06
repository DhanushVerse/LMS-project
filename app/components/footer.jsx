import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            FURIOUS <br /> LEARNERS
          </h2>
          <p className="text-teal-500 mt-2 mb-4">ONLINE EDUCATION & LEARNING</p>
          <p className="text-sm text-gray-500 mb-4">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="flex gap-4 text-white">
            <a
              href="https://www.facebook.com/share/1AKyjmuCvQ/"
              aria-label="Facebook"
              className="bg-teal-500 p-2 rounded-full hover:bg-teal-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/srishanmugha"
              aria-label="Twitter"
              className="bg-teal-500 p-2 rounded-full hover:bg-teal-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/shanmughainstitutions"
              aria-label="Instagram"
              className="bg-teal-500 p-2 rounded-full hover:bg-teal-600 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-800">Explore</h4>
          <ul className="space-y-2 text-sm text-teal-500">
            <li>
              <Link href="/">→ About Us</Link>
            </li>
            <li>
              <Link href="/course">→ Courses</Link>
            </li>
            <li>
              <Link href="/contact">→ Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-800">Quick Links</h4>
          <ul className="space-y-2 text-sm text-teal-500">
            <li>
              <Link href="/contact">→ Contact Us</Link>
            </li>
            <li>
              <Link href="/pricing">→ Pricing</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-800">Recent Posts</h4>
          <div className="space-y-4 text-sm">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-teal-500 w-12 h-12 rounded flex items-center justify-center text-white text-lg">
                  <BsFillFileEarmarkTextFill />
                </div>
                <div>
                  <p className="text-teal-500">
                    📅 {["JAN. 18, 2021", "APR. 25, 2022", "MAY. 15, 2022"][i]}{" "}
                    <span className="text-green-600">
                      👤 {["Admin", "Admin", "User"][i]}
                    </span>
                  </p>
                  <p className="text-gray-700">
                    Build your Dream Software & Engineering ...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-800">Have a Question?</h4>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-teal-500 mt-1" />
              <span>
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-teal-500" />
              <span>+2 392 3929 210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPaperPlane className="text-teal-500" />
              <span>info@yourdomain.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-12 px-4">
        © 2025 All rights reserved | Made with
        <span className="text-teal-500 mx-1">♥</span> by{" "}
        <strong>FURIOUS LEARNERS</strong>
      </div>
    </footer>
  );
}
