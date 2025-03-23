import React, { useEffect } from "react";
import { useModal } from "../context/modalContext";
import { useAuthStore } from "../store/useAuthStore";

const Header = () => {
  const { openModal } = useModal();
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="bg-[#d4ebff] text-black min-h-screen flex items-center px-6 md:px-16">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Section */}
        <div className="lg:col-span-6 xl:col-span-7 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight">
            Dr. Walaa Gad
            <span className="block text-lg sm:text-xl md:text-3xl lg:text-4xl font-light text-gray-600">
              Physiotherapist
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Providing top-tier physiotherapy services to help you recover and regain strength. 
            Your health and well-being are our priority.
          </p>
          {/* Buttons and Badge */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md"
            >
              Health Plans
            </a>

            {authUser ? (
              <a
                href="/appointments"
                className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all shadow-md"
              >
                Appointments
              </a>
            ) : (
              <button
                onClick={() => openModal("signIn")}
                className="px-6 py-3 text-lg font-semibold border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all shadow-md"
              >
                Sign In
              </button>
            )}
          </div>
          {/* Patients Badge */}
          <div className="mt-6 flex items-center bg-white shadow-md rounded-lg px-4 py-3 border border-gray-200">
            <div className="flex -space-x-2">
              <Avatar src="https://randomuser.me/api/portraits/women/45.jpg" alt="Patient" />
              <Avatar src="https://randomuser.me/api/portraits/men/46.jpg" alt="Patient" />
            </div>
            <p className="ml-3 text-gray-700 text-base font-medium">150k+ Patients Recovered</p>
          </div>
        </div>

        {/* Right Section - Doctor Image */}
        <div className="lg:col-span-6 xl:col-span-5 flex justify-center">
          <img
            className="w-full max-w-xs sm:max-w-sm border border-2 border-white md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            src="/doc.png"
            alt="Doctor"
          />
        </div>
      </div>
    </div>
  );
};

const Avatar = ({ src, alt }) => (
  <img
    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white"
    src={src}
    alt={alt}
  />
);

export default Header;
