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
            Dr. Walaa
            <span className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-light align-top text-gray-600">
              Physiotherapist
            </span>
          </h1>

  <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-2xl font-montserrat text-blue-700">Hello Habiba! Please click on the Log In button.</p>
 <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-2xl font-montserrat text-gray-700"> At Dr. Walaa Gad’s clinic, we are dedicated to providing exceptional physiotherapy services with a focus on personalized care, rehabilitation, and long-term wellness. Our mission is to restore mobility, reduce pain, and enhance the quality of life for every patient through evidence-based techniques and compassionate treatment.
</p>
          {/* Buttons and Badge */}
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href="/doctors"
              className="px-4 py-2 text-sm md:text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-[#d4ebff] hover:text-blue-600 border-2 border-blue-600 transition-all shadow-md"
            >
              Doctors
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
                Log In
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
        <div className="lg:col-span-6 xl:col-span-5 flex border-2 border-white flex-col items-center lg:flex-row lg:items-center gap-6 mt-6 lg:mt-0">
          {/* Doctor Image */}
          <img
            className="w-4/6 sm:w-3/6 md:w-2/5 lg:w-4/6"
            src="/doc.png"
            alt="Doctor"
          />

          {/* Horizontal Cards */}
          <div className="flex flex-col gap-2 w-full max-w-[180px] sm:max-w-[220px]">
            <Card
              icon="🏥"
              title="Expert Care"
              text="Personalized treatment plans tailored to your needs."
            />
            <Card
              icon="💪"
              title="Recovery Support"
              text="Comprehensive support for a speedy recovery."
            />
            <Card
              icon="📅"
              title="Flexible Appointments"
              text="Schedule at your convenience."
            />
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
  <div className="bg-white shadow-lg rounded-xl p-2 md:p-3 w-full flex items-center border border-gray-200">
    <div className="text-lg md:text-xl mr-2">{icon}</div>
    <div>
      <h3 className="text-sm md:text-base font-semibold">{title}</h3>
      <p className="text-xs md:text-sm text-gray-600">{text}</p>
    </div>
  </div>
);

export default Header;
