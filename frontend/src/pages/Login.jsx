import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newError = {};

    if (!user.email.trim()) {
      newError.email = "Email is Required";
    }

    if (!user.password.trim()) {
      newError.password = "Password is Required";
    }

    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validateErrors = validate();

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    try {
      const response = await API.post("/student/login", user);

      console.log(response.data);

      // Save Token
      localStorage.setItem("token", response.data.token);

      // Save Logged-in User
      localStorage.setItem(
        "student",
        JSON.stringify(response.data.student)
      );

      alert(response.data.message);

      // Redirect based on role
      if (response.data.student.role === "admin") {
        navigate("/add-company");
      } else {
        navigate("/");
      }

      // Clear Form
      setUser({
        email: "",
        password: "",
      });

      setErrors({});

      // Refresh Navbar
      window.location.reload();

    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg p-3"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />

            {errors.email && (
              <p className="text-red-500 mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block font-medium mb-2">
              Password
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg p-3"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />

            {errors.password && (
              <p className="text-red-500 mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-4"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?
        </p>

        <button
          onClick={() => navigate("/registration")}
          className="text-blue-600 hover:underline block mx-auto mt-2"
        >
          Register
        </button>

      </div>
    </div>
  );
}