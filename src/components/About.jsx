import React from "react";

const About = () => {
  return (
    <div className="hero bg-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-14">
        {/* Image Container */}
        <div className="flex flex-row gap-4">
          <img
            src="abtImg2.jpg"
            className="max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-xs rounded-lg shadow-2xl"
            alt="About Image 2"
          />
          <img
            src="abtImg1.jpg"
            className="max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-xs rounded-lg shadow-2xl"
            alt="About Image 1"
          />
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold font-poppins text-black">
            About Our Wellness Platform
          </h1>
          <p className="py-6 text-black font-poppins">
            We're a passionate team dedicated to guiding you towards a life of
            vitality and well-being. With a deep commitment to holistic health, we
            merge expert knowledge with a personalized approach to empower your
            journey.
          </p>
          <a
            href="/doctors"
            className="btn text-white bg-slate-900 rounded-full w-32 h-10 border-2 border-grey-900 hover:bg-white hover:w-34 hover:text-gray-900 hover:font-bold"
          >
            View Doctors
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
