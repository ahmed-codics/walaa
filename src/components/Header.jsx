import React, { useState, useEffect } from "react";
import { useModal } from "../context/modalContext";
import { useAuthStore } from "../store/useAuthStore";

const Header = () => {
  const { openModal } = useModal();
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="bg-[#d4ebff] text-black min-h-screen flex items-center px-4 md:px-12 py-4 md:py-12">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-12 gap-6 md:gap-8">
        {/* Left Section */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight tracking-tight">
            Dr. Walaa Gad{" "}
            <span className="text-base sm:text-lg md:text-2xl lg:text-4xl font-light align-top text-gray-600">
              Physiotherapist
            </span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-xl text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam
            iste possimus voluptatum qui? Nisi nulla, amet illo veritatis commodi
            error hic eveniet molestiae dolores alias ratione, dignissimos minus
            dolorum.
          </p>
          {/* Buttons and Badge */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="px-3 py-2 text-xs md:text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-[#d4ebff] hover:text-blue-600 border-2 border-blue-600 transition-all shadow-md"
            >
              Health Plans
            </a>

            {authUser ? (
              <a
                href="/appointments"
                className="px-3 py-2 text-xs md:text-base font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all shadow-md"
              >
                Appointments
              </a>
            ) : (
              <a
                href="#"
                onClick={() => openModal("signIn")}
                className="px-3 py-2 text-xs md:text-base font-semibold border-2 border-black text-black rounded-lg hover:bg-black hover:text-[#d4ebff] transition-all shadow-md"
              >
                Sign In
              </a>
            )}

            {/* Patients Badge */}
            <div className="bg-white shadow-md rounded-lg hover:border-blue-600 hover:border-5 transition ease-in-out px-3 py-2 flex items-center space-x-2 border-2 border-gray-200">
              <div className="flex -space-x-1">
                <Avatar src="https://randomuser.me/api/portraits/women/45.jpg" alt="Patient" />
                <Avatar src="https://randomuser.me/api/portraits/men/46.jpg" alt="Patient" />
              </div>
              <p className="text-gray-700 text-xs md:text-sm font-medium">
                150k+ Patients Recovered
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Doctor Image and Cards */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center lg:items-end">
          <img
            className="hidden md:block w-2/5 lg:w-1/3 xl:w-1/3 border-4 border-white rounded-full"
            src="/doc.png"
            alt="Doctor"
          />
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Card icon="💼" title="20+ Years" text="Experience in physiotherapy" />
            <Card icon="🏆" title="Top Rated" text="Highly rated by patients" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Avatar = ({ src, alt }) => (
  <img
    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
    src={src}
    alt={alt}
  />
);

const Card = ({ icon, title, text }) => (
  <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 flex items-center border border-gray-200">
    <div className="text-2xl md:text-3xl mr-4">{icon}</div>
    <div>
      <h3 className="text-lg md:text-2xl font-semibold">{title}</h3>
      <p className="text-xs md:text-sm text-gray-600">{text}</p>
    </div>
  </div>
);

export default Header;
