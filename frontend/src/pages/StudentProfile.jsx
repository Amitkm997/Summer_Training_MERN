import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

export default function StudentProfile() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  const loggedInStudent = JSON.parse(
    localStorage.getItem("student")
  );

  const getStudent = async () => {
    try {
      const response = await API.get(`/student/${id}`);
      setStudent(response.data.student);
      console.log(response.data)
    } catch (error) {
      alert(error.response?.data?.message || "Unable to fetch student");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 text-2xl">
        Student Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Banner */}

        <div className="bg-gradient-to-r from-blue-700 to-indigo-600 h-56 flex justify-center items-end">

          <img
            src={`https://ui-avatars.com/api/?name=${student.name}&background=ffffff&color=2563eb&size=256`}
            alt={student.name}
            className="w-40 h-40 rounded-full border-4 border-white shadow-xl translate-y-16"
          />

        </div>

        {/* Content */}

        <div className="pt-24 px-10 pb-10">

          <div className="text-center">

            <h1 className="text-4xl font-bold">
              {student.name}
            </h1>

            <p className="text-blue-600 text-xl mt-2">
              {student.course}
            </p>

            <span className="inline-block mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              🟢 Available for Placement
            </span>

          </div>

          {/* Information */}

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div className="bg-gray-50 rounded-xl shadow p-6">

              <h2 className="text-2xl font-bold text-blue-600 mb-5">
                Personal Information
              </h2>

              <p className="mb-4">
                <strong>Name:</strong> {student.name}
              </p>

              <p className="mb-4">
                <strong>Email:</strong> {student.email}
              </p>

              <p className="mb-4">
                <strong>Course:</strong> {student.course}
              </p>

              <p>
                <strong>Role:</strong> {student.role}
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl shadow p-6">

              <h2 className="text-2xl font-bold text-blue-600 mb-5">
                Skills
              </h2>

              <div className="flex flex-wrap gap-3">

                {student.skills.split(",").map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                  >
                    {skill.trim()}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* Applied Companies */}

          <div className="mt-10 bg-gray-50 rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Applied Companies
            </h2>

            {student.appliedCompanies &&
            student.appliedCompanies.length > 0 ? (

              <div className="grid md:grid-cols-2 gap-5">

                {student.appliedCompanies.map((company) => (

                  <div
                    key={company._id}
                    className="border rounded-xl p-5 hover:shadow-lg transition"
                  >

                    <h3 className="text-xl font-bold">
                      {company.companyName}
                    </h3>

                    <p className="mt-2">
                      💼 {company.role}
                    </p>

                    <p>
                      💰 {company.salaryPackage} 
                    </p>

                    <p>
                      📍 {company.location}
                    </p>

                  </div>

                ))}

              </div>

            ) : (

              <p className="text-gray-500">
                No companies applied yet.
              </p>

            )}

          </div>

          {/* Placement Stats */}

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            <div className="bg-blue-100 rounded-xl p-6 text-center">

              <h3 className="font-bold">
                Applications
              </h3>

              <p className="text-4xl font-bold text-blue-700 mt-3">
                {student.appliedCompanies
                  ? student.appliedCompanies.length
                  : 0}
              </p>

            </div>

            <div className="bg-green-100 rounded-xl p-6 text-center">

              <h3 className="font-bold">
                Interviews
              </h3>

              <p className="text-4xl font-bold text-green-700 mt-3">
                0
              </p>

            </div>

            <div className="bg-purple-100 rounded-xl p-6 text-center">

              <h3 className="font-bold">
                Offers
              </h3>

              <p className="text-4xl font-bold text-purple-700 mt-3">
                0
              </p>

            </div>

          </div>

          {/* Edit Button */}

          {loggedInStudent &&
            loggedInStudent._id === student._id && (

              <div className="mt-10 text-center">

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
                  Edit Profile
                </button>

              </div>

            )}

        </div>

      </div>

    </div>
  );
}