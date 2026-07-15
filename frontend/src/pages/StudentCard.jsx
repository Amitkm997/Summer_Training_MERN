import React from "react";
import { useNavigate } from "react-router-dom";

export default function StudentCard({ student }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-200">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-36 flex justify-center items-end">

        <img
          src={`https://ui-avatars.com/api/?name=${student.name}&background=ffffff&color=2563eb&size=256`}
          alt={student.name}
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg translate-y-10"
        />

      </div>

      {/* Body */}
      <div className="pt-14 px-6 pb-6">

        <div className="text-center">

          <h2 className="text-2xl font-bold text-gray-800">
            {student.name}
          </h2>

          <p className="text-blue-600 font-semibold mt-1">
            {student.course}
          </p>

          <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            🟢 Available
          </span>

        </div>

        <hr className="my-5" />

        <div className="space-y-4 text-gray-700">

          <div>
            <p className="font-semibold">📧 Email</p>
            <p className="text-gray-600 break-all">
              {student.email}
            </p>
          </div>

          <div>
            <p className="font-semibold mb-2">💻 Skills</p>

            <div className="flex flex-wrap gap-2">

              {student.skills.split(",").map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill.trim()}
                </span>
              ))}

            </div>

          </div>

          <div className="flex justify-between items-center">

            <span className="font-semibold">
              🎓 Role
            </span>

            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
              {student.role}
            </span>

          </div>

        </div>

        <button
          onClick={() => navigate(`/student/${student._id}`)}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
        >
          👤 View Profile →
        </button>

      </div>

    </div>
  );
}