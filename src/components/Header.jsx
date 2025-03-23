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
    <div className="bg-[#d4ebff] text-black min-h-screen flex items-center px-4 md:px-12">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-12 gap-8 pb-16">
        {/* Left Section */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Dr. Walaa Gad
            <span className="block text-lg sm:text-xl md:text-3xl lg:text-5xl font-light text-gray-600">
              Physiotherapist
            </span>
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-2xl text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam
            iste possimus voluptatum qui? Nisi nulla, amet illo veritatis commodi
            error hic eveniet molestiae dolores alias ratione, dignissimos minus
            dolorum.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="px-4 py-2 text-sm md:text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-[#d4ebff] hover:text-blue-600 border-2 border-blue-600 transition-all shadow-md"
            >
              Health Plans
            </a>
            {authUser ? (
              <a
                href="/appointments"
                className="px-4 py-2 text-sm md:text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all shadow-md"
              >
                Appointments
              </a>
            ) : (
              <a
                href="#"
                onClick={() => openModal("signIn")}
                className="px-4 py-2 text-sm md:text-lg font-semibold border-2 border-black text-black rounded-lg hover:bg-black hover:text-[#d4ebff] transition-all shadow-md"
              >
                Sign In
              </a>
            )}
          </div>
        </div>

        {/* Right Section - Doctor Image */}
        <div className="hidden lg:flex lg:col-span-6 xl:col-span-5 justify-center items-center">
          <img
            className="w-2/5 lg:w-3/6 xl:w-2/6 border-4 border-white rounded-full shadow-lg"
            src="/doc.png"
            alt="Doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
