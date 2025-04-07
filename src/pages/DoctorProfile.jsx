import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const DoctorProfile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name } = useParams();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Doctor Not Found</h2>
          <p className="text-gray-600">Please go back and select a doctor.</p>
          <button
            onClick={() => navigate("/appointments")}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 py-10 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Profile Card */}
        <div className="w-full md:w-1/2 bg-white shadow-2xl rounded-2xl overflow-hidden transform transition duration-500">
          <img src={state.image} alt={name} className="w-full h-72 object-contain bg-gray-200" />
          <div className="p-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">{state.name}</h1>
            <p className="text-lg text-gray-700 mt-4">{state.description}</p>
            <div className="mt-6 text-gray-600">
              <p><strong>Specialization:</strong> Dermatology</p>
              <p><strong>Experience:</strong> 10+ Years</p>
              <p><strong>Contact:</strong> contact@example.com</p>
            </div>
          </div>
        </div>
        
        {/* Additional Info Card */}
        <div className="w-full md:w-1/2 bg-white shadow-2xl rounded-2xl p-8 flex flex-col justify-center transform transition duration-500 ">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Doctor's Journey</h2>
          <div className="text-gray-700 text-lg leading-relaxed">
            <p>{state.name} has dedicated their life to providing exceptional medical care. With over a decade of experience, they have treated thousands of patients with compassion and expertise. 
            Graduating from a prestigious medical institution, they continued their journey by working in top hospitals and conducting groundbreaking research in their field. Their passion for medicine and dedication to patient well-being have earned them numerous awards and recognitions.
            Today, {state.name} continues to push the boundaries of medical excellence, ensuring every patient receives personalized and top-tier care.</p>
          </div>
          
          <div className="mt-6 flex flex-col gap-4 sm:flex-row justify-center">
            <button
              onClick={() => navigate("/appointments")}
              className="px-6 py-3 border border-gray-600 text-gray-600 rounded-lg shadow-lg hover:bg-gray-600 hover:text-white transition-all"
            >
              Back
            </button>
            <button
              onClick={() => navigate(`/booking/${state.name}`, { state })}
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
