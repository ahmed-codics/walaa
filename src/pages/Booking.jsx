import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Booking = () => {
  const { doctorName } = useParams(); // ✅ Get doctor name from URL
  const navigate = useNavigate();

  // ✅ State for doctor details & user ID
  const [doctor, setDoctor] = useState(null);
  const [userId, setUserId] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [availableTimes, setAvailableTimes] = useState([]);

useEffect(() => {
  const fetchTimes = async () => {
    try {
      const { data } = await axios.get("https://walaaback-production-7c7e.up.railway.app/api/bookings/available-times");
      if (Array.isArray(data)) {
        setAvailableTimes(data);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching times:", error);
      toast.error("Failed to load available times.");
    }
  };
  fetchTimes();
}, []);


  // ✅ Fetch Doctor Details
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const { data } = await axios.get(`https://walaaback-production-7c7e.up.railway.app/api/bookings/doctors/${doctorName}`);
        setDoctor(data);
      } catch (error) {
        toast.error("Doctor not found!");
        navigate("/");
      }
    };

    fetchDoctor();
  }, [doctorName, navigate]);

  // ✅ Fetch User ID
// Fetch user ID
useEffect(() => {
  const fetchUserId = async () => {
    try {
      const { data } = await axios.get("https://walaaback-production-7c7e.up.railway.app/api/bookings/user", { withCredentials: true });
      if (data && data._id) setUserId(data._id);
      else throw new Error("Invalid response from server");
    } catch (error) {
      toast.error("Authentication required! Please log in.");
      navigate("/login");
    }
  };

  fetchUserId();
}, [navigate]);

// Handle booking
const handleBooking = async (e) => {
  e.preventDefault();

  if (!userId) return toast.error("User not authenticated!");
  if (!selectedDate || !selectedTime) return toast.error("Please select a date and time!");

  const bookingData = { doctorName: doctor.name, userId, date: selectedDate, time: selectedTime, consultationFee: 50 };

  try {
    const response = await axios.post("https://walaaback-production-7c7e.up.railway.app/api/bookings/book", bookingData, { withCredentials: true });

    if (response.status === 201) {
      toast.success("Booking successful! 🎉", { icon: "✅" });
      setTimeout(() => navigate("/"), 2000);
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Error booking appointment.");
  }
};

  if (!doctor) return <h2 className="text-center text-red-600 font-bold">Loading doctor details...</h2>;

  return (
    <div className="font-poppins min-h-screen bg-gray-100 py-10">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Book an Appointment</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Complete the form below to schedule an appointment with <span className="font-semibold">{doctor.name}</span>.
        </p>

        {/* ✅ Booking Layout */}
        <div className="bg-white shadow-xl rounded-lg p-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 transition-all">
          
          {/* ✅ Left: Doctor Info */}
          <div className="w-full md:w-1/2">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-80 object-cover rounded-lg shadow-md transition-transform hover:scale-105"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">{doctor.name}</h2>
            <p className="text-gray-600">{doctor.description}</p>
          </div>

          {/* ✅ Right: Booking Form */}
          <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg">
            <form className="space-y-4" onSubmit={handleBooking}>
              
              {/* Date Selection */}
              <label className="block font-medium text-gray-700">Choose Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />

              {/* Time Selection */}
              <label className="block font-medium text-gray-700">Select Time</label>
<select className="w-full p-2 border rounded-lg" required value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
  <option value="">Select a time</option>
  {availableTimes.map((time) => (
    <option key={time} value={time}>{time}</option>
  ))}
</select>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 text-lg font-medium bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                Confirm Booking
              </button>
            </form>

            {/* ✅ Back Button */}
            <button onClick={() => navigate(-1)} className="mt-4 text-blue-600 hover:underline">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
