import React from "react";
import { useNavigate } from "react-router-dom";

export default function StudentCard({ student }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden">

      {/* Header */}
      <div className="bg-blue-600 py-8 flex justify-center">
        <img
          src={`https://ui-avatars.com/api/?name=${student.name}&background=ffffff&color=2563eb&size=128`}
          alt={student.name}
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Body */}
      <div className="p-6">

        <h2 className="text-2xl font-bold text-center text-gray-800">
          {student.name}
        </h2>

        <p className="text-center text-blue-600 font-medium mb-6">
          {student.course}
        </p>

        <div className="space-y-3 text-gray-700">

          <p>
            <span className="font-semibold">📧 Email:</span><br />
            {student.email}
          </p>

          <p>
            <span className="font-semibold">💻 Skills:</span><br />
            {student.skills}
          </p>

          <p>
            <span className="font-semibold">🎓 Role:</span>
            {" "}
            {student.role}
          </p>

        </div>

        <button
          onClick={() => navigate(`/student/${student._id}`)}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          View Profile
        </button>

      </div>

    </div>
  );
}