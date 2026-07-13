import React, { useState } from "react";
import API from "../services/api";

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
    skills: "",
    role: "student",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [serverError, setServerError] = useState("");

  // Password Regex (Same as Backend)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.";
    }

    if (!formData.course.trim()) {
      newErrors.course = "Course is required";
    }

    if (!formData.skills.trim()) {
      newErrors.skills = "Skills are required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent page to reload

    setSuccess("");
    setServerError("");

    if (!validateForm()) return;

    try {
      setLoading(true);
      
      const response = await API.post("/student/register", formData);

      setSuccess(response.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
        course: "",
        skills: "",
        role: "student",
      });

      setErrors({});
    } catch (error) {
      setServerError(
        error.response?.data?.message || "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Registration Form */}

        <div className="bg-white shadow-lg rounded-xl p-8">

          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Student Registration
          </h1>

          {success && (
            <div className="bg-green-100 text-green-700 border border-green-400 p-3 rounded mb-5">
              {success}
            </div>
          )}

          {serverError && (
            <div className="bg-red-100 text-red-700 border border-red-400 p-3 rounded mb-5">
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}

            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            </div>

            {/* Email */}

            <div>
              <label className="block mb-2 font-semibold">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            </div>

            {/* Password */}

            <div>
              <label className="block mb-2 font-semibold">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            </div>

            {/* Course */}

            <div>
              <label className="block mb-2 font-semibold">
                Course
              </label>

              <input
                type="text"
                name="course"
                placeholder="Enter Course"
                value={formData.course}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.course}
              </p>
            </div>

            {/* Skills */}

            <div>
              <label className="block mb-2 font-semibold">
                Skills
              </label>

              <input
                type="text"
                name="skills"
                placeholder="React, Node.js, MongoDB"
                value={formData.skills}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.skills}
              </p>
            </div>

            {/* Role */}

            <div>
              <label className="block mb-2 font-semibold">
                Role
              </label>

              <input
                type="text"
                value={formData.role}
                readOnly
                className="w-full border rounded-lg p-3 bg-gray-200 cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition"
            >
              {loading ? "Registering..." : "Register Student"}
            </button>

          </form>

        </div>

        {/* Live Preview */}

        <div className="bg-white shadow-lg rounded-xl p-8">

          <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
            Live Preview
          </h2>

          <div className="space-y-4 text-lg">

            <p><strong>Name:</strong> {formData.name || "-"}</p>

            <p><strong>Email:</strong> {formData.email || "-"}</p>

            <p><strong>Password:</strong> {"*********"}</p>

            <p><strong>Course:</strong> {formData.course || "-"}</p>

            <p><strong>Skills:</strong> {formData.skills || "-"}</p>

            <p><strong>Role:</strong> {formData.role}</p>

          </div>

        </div>

      </div>
    </div>
  );
}