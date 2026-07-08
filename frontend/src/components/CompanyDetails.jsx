import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function CompanyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompany();
  }, []);

  const fetchCompany = async () => {
    try {
      const response = await API.get(`/company/${id}`);
      console.log(response.data);

      // Your backend returns: { company: {...} }
      setCompany(response.data.comapnay); // Use company if you've fixed the spelling in backend
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Unable to fetch company");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold text-red-500">
          Company Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold text-blue-700">
          {company.companyName}
        </h1>

        <p className="text-xl text-gray-600 mt-2">
          {company.role}
        </p>

        <hr className="my-6" />

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Package
            </h3>

            <p className="text-gray-700">
              💰 {company.salaryPackage} LPA
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Location
            </h3>

            <p className="text-gray-700">
              📍 {company.location}
            </p>
          </div>

        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">
            Job Description
          </h3>

          <p className="text-gray-700 leading-7">
            {company.description ||
              "No description available for this company."}
          </p>
        </div>

        <div className="mt-10 flex gap-4">

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            Apply Now
          </button>

          <button
            onClick={() => navigate(-1)}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            Back
          </button>

        </div>

      </div>
    </div>
  );
}