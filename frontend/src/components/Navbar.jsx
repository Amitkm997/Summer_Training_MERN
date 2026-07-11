import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("student");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Placement Portal
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-8 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>

          <Link to="/companies" className="hover:text-yellow-300 transition">
            Companies
          </Link>

          <Link to="/student" className="hover:text-yellow-300 transition">
            Students
          </Link>

          <Link to="/about" className="hover:text-yellow-300 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">

          {token ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Login
            </button>
          )}

          {!token && (
            <button onClick={() => navigate("/registration")} className="px-4 py-2 border border-white rounded-lg hover:text-yellow-600 transition">Register</button>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;