import React from "react";

export default function StudentCard({ student }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-200">

      {/* Header */}
      <div className="bg-blue-600 h-20 relative">
        <img
          src={student.image}
          alt={student.name}
          className="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 -translate-x-1/2 top-8 object-cover"
        />
      </div>

      {/* Body */}
      <div className="pt-16 p-6">

        <h2 className="text-2xl font-bold text-center text-gray-800">
          {student.name}
        </h2>

        <p className="text-center text-blue-600 font-medium">
          {student.course}
        </p>

        <p className="text-center text-gray-500 mb-5">
          {student.college}
        </p>

        <div className="space-y-3 text-gray-700">

          <div className="flex justify-between">
            <span className="font-semibold">🎓 Graduation</span>
            <span>{student.graduationYear}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">📊 CGPA</span>
            <span>{student.cgpa}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">📍 Location</span>
            <span>{student.location}</span>
          </div>

        </div>

        {/* Skills */}
        <div className="mt-5">
          <h3 className="font-semibold text-gray-800 mb-2">
            Skills
          </h3>

          {/* <div className="flex flex-wrap gap-2">
            {student.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div> */}
        </div>

        {/* Placement Status */}
        <div className="mt-6 flex justify-between items-center">

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              student.status === "Placed"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {student.status}
          </span>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
            View Profile
          </button>

        </div>

      </div>
    </div>
  );
}