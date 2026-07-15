import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">
              Placement Portal
            </h2>

            <p className="text-gray-400 leading-7">
              Helping students connect with top companies and
              achieve their dream careers through internships
              and placement opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/companies"
                  className="hover:text-white transition"
                >
                  Companies
                </Link>
              </li>

              <li>
                <Link
                  to="/student"
                  className="hover:text-white transition"
                >
                  Students
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📧 placementportal@gmail.com</p>
              <p>📞 +91 6389187143</p>
              <p>📍 New Delhi, India</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-2xl">
              <a href="#" className="hover:text-blue-400 transition">
                🌐
              </a>

              <a href="#" className="hover:text-pink-500 transition">
                📸
              </a>

              <a href="#" className="hover:text-blue-500 transition">
                💼
              </a>

              <a href="#" className="hover:text-sky-400 transition">
                🐦
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>
            © 2026 Placement Portal. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}