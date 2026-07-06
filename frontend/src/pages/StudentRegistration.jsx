import React, { useState } from "react";

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
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
      alert("Registration Successful");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Registration Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">

          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Student Registration
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block font-medium mb-1">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium mb-1">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            </div>

            {/* Course */}
            <div>
              <label className="block font-medium mb-1">
                Course
              </label>

              <input
                type="text"
                name="course"
                placeholder="Enter Course"
                value={formData.course}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.course}
              </p>
            </div>

            {/* Skills */}
            <div>
              <label className="block font-medium mb-1">
                Skills
              </label>

              <input
                type="text"
                name="skills"
                placeholder="React, Node.js, MongoDB"
                value={formData.skills}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.skills}
              </p>
            </div>

            {/* Role */}
            <div>
              <label className="block font-medium mb-1">
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Register Student
            </button>

          </form>
        </div>

        {/* Live Preview */}
        <div className="bg-white shadow-lg rounded-xl p-8">

          <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
            Live Preview
          </h2>

          <div className="space-y-4 text-lg">

            <p>
              <span className="font-semibold">Name:</span>{" "}
              {formData.name || "-"}
            </p>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              {formData.email || "-"}
            </p>

            <p>
              <span className="font-semibold">Password:</span>{" "}
              {formData.password || "-"}
            </p>

            <p>
              <span className="font-semibold">Course:</span>{" "}
              {formData.course || "-"}
            </p>

            <p>
              <span className="font-semibold">Skills:</span>{" "}
              {formData.skills || "-"}
            </p>

            <p>
              <span className="font-semibold">Role:</span>{" "}
              {formData.role}
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}