import React, { useState, useEffect } from "react";
import ContactUs from "../components/ContactUs";
import UpcomingAppointments from "../components/UpcomingAppointments"; // ✅ Upcoming Appointments
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { axiosInstace } from "../lib/axios";

const Appointments = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasAppointments, setHasAppointments] = useState(false); // ✅ Tracks if appointments exist

  useEffect(() => {
    const fetchUserId = async () => {
      try {
<<<<<<< HEAD
        const { data } = await axios.get(
          "https://walaaback-production-7c7e.up.railway.app/api/auth/check",
          { withCredentials: true }
        );
=======
        const { data } = await axios.get("https://walaaback-production-7c7e.up.railway.app/api/auth/check", { withCredentials: true });
>>>>>>> c2d711e108ee0992dc36fc572d17b975f59af997
        if (data && data._id) setUserId(data._id);
      } catch (error) {
        toast.error("Authentication required!");
      } finally {
        setLoading(false);
      }
    };

    fetchUserId();
  }, []);

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
        {!loading && userId && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              {hasAppointments
                ? "Your Upcoming Appointments"
                : "No Appointments Yet — Book Your First Visit Today!"}
            </h2>

            <UpcomingAppointments userId={userId} onCheck={(status) => setHasAppointments(status)} />
          </>
        )}

        {/* ✅ Always show doctor list */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mt-12 mb-6">
          Our Specialists
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Explore our dedicated team of professionals, ready to guide you on your path to better health and wellness.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white w-96 shadow-xl border rounded-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105"
            >
              <figure className="w-full h-64 overflow-hidden">
                <img
                  src={doctor.image || "https://via.placeholder.com/400"}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </figure>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{doctor.name}</h2>
                <p className="text-gray-600 flex-grow">{doctor.description}</p>
                <div className="mt-4 flex justify-between gap-3">
                  <button
                    onClick={() => navigate(`/doctor-profile/${doctor.name}`, { state: doctor })}
                    className="w-1/2 py-2 text-lg font-medium border-2 border-blue-600 text-blue-600 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all"
                  >
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
