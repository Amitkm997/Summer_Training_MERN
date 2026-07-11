import React, { useEffect, useState } from "react";
import API from "../services/api";
import StudentCard from "../pages/StudentCard";

export default function Student() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStudents = async () => {
    try {
      const response = await API.get("/student");

      console.log(response.data);

      setStudents(response.data.student);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Unable to fetch students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-2xl font-semibold">
        Loading Students...
      </div>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-3">
          Registered Students
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Explore talented students available for campus placements.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {students.map((student) => (
            <StudentCard
              key={student._id}
              id={student._id}
              student={student}
            />
          ))}

        </div>

      </div>
    </section>
  );
}