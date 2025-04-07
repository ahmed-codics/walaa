import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstace } from "../lib/axios";
import toast from "react-hot-toast";

const DoctorList = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axiosInstace.get("/doctors");
        setDoctors(res.data || []);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        toast.error("Failed to fetch doctors.");
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="font-poppins min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* ✅ Page Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Meet Our Doctors
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Choose from our highly experienced professionals for specialized consultations and treatments.
        </p>

        {/* ✅ Doctors List */}
        <div className="flex flex-wrap justify-center gap-8">
          {doctors.length === 0 ? (
            <p className="text-gray-500">No doctors found.</p>
          ) : (
            doctors.map((doctor, index) => (
              <div
                key={doctor._id || index}
                className="bg-white w-96 shadow-xl border rounded-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105"
              >
                {/* ✅ Image */}
                <figure className="w-full h-64 overflow-hidden">
                <img
  src={doctor.image.startsWith("http") 
    ? doctor.image 
    : `https://walaaback-production-7c7e.up.railway.app/${doctor.image.replace(/^\/+/, "")}`}
  alt={doctor.name}
  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
/>
                </figure>

                {/* ✅ Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{doctor.name}</h2>
                  <p className="text-gray-600 flex-grow">{doctor.specialization || doctor.description}</p>

                  {/* ✅ Buttons */}
                  <div className="mt-4 flex justify-between gap-3">
                    <button className="w-1/2 py-2 text-lg font-medium border-2 border-blue-600 text-blue-600 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all">
                      View Profile
                    </button>
                    <button
                      className="w-1/2 py-2 text-lg font-medium bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all"
                      onClick={() => navigate(`/booking/${doctor.name}`, { state: doctor })}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
