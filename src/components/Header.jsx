import React, { useEffect } from "react";
import { useModal } from "../context/modalContext";
import { useAuthStore } from "../store/useAuthStore";

const Header = () => {
  const { openModal } = useModal();
  const { authUser, checkAuth } = useAuthStore(); // Access authentication state

  useEffect(() => {
    checkAuth(); // Ensure session is checked on page load
  }, [checkAuth]);

  return (
    <div className="bg-[#d4ebff] text-black min-h-screen flex items-center px-4 md:px-12">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-12 gap-8 pb-16">
        {/* Left Section */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight tracking-tight">
            Dr. Walaa Gad{" "}
            <span className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-light align-top text-gray-600">
              Physiotherapist
            </span>
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-2xl text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam
            iste possimus voluptatum qui? Nisi nulla, amet illo veritatis commodi
            error hic eveniet molestiae dolores alias ratione, dignissimos minus
            dolorum..
          </p>
          {/* Buttons and Badge */}
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="px-4 py-2 text-sm md:text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-[#d4ebff] hover:text-blue-600 border-2 border-blue-600 transition-all shadow-md"
            >
              Health Plans
            </a>

            {authUser ? (
              // Show "Appointments" button when logged in
              <a
                href="/appointments"
                className="px-4 py-2 text-sm md:text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all shadow-md"
              >
                Appointments
              </a>
            ) : (
              // Show "Sign In" button when not logged in
              <a
                href="#"
                onClick={() => openModal("signIn")}
                className="px-4 py-2 text-sm md:text-lg font-semibold border-2 border-black text-black rounded-lg hover:bg-black hover:text-[#d4ebff] transition-all shadow-md"
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

        {/* Right Section - Doctor Image */}
        <div className="lg:col-span-6 xl:col-span-5 flex items-center justify-center mt-6 lg:mt-0">
          <img
            className="w-4/6 sm:w-3/6 md:w-2/5 lg:w-4/6"
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
    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
    src={src}
    alt={alt}
  />
);

export default Header;
