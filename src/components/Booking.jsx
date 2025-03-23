import { FaCalendarAlt } from "react-icons/fa";

export default function Booking() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      {/* ✅ Left: Image */}
      <div className="order-2 md:order-1">
        <img
          src="booking.jpg"
          alt="Appointment"
          className="rounded-lg shadow-md w-full"
        />
      </div>

      {/* ✅ Right: Form */}
      <div className="order-1 md:order-2">
        <h2 className="text-3xl sm:text-4xl font-light mb-6 text-black font-montserrat">
          Book Your Appointment
        </h2>

        <form className="space-y-6">
          {/* ✅ Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-montserrat text-black mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-black bg-white rounded-md px-4 py-2 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              />
            </div>
            <div>
              <label className="block font-montserrat text-black mb-1">Email</label>
              <input
                type="email"
                placeholder="xyz@gmail.com"
                className="w-full border border-black bg-white rounded-md px-4 py-2 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              />
            </div>
          </div>

          {/* ✅ Phone & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-montserrat text-black mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+20 11 1145 8643"
                className="w-full border border-black bg-white rounded-md px-4 py-2 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              />
            </div>
            <div>
              <label className="block font-montserrat text-black mb-1">Date</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border border-black bg-white rounded-md px-4 py-2 pr-10 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                />
                <FaCalendarAlt className="absolute right-3 top-3 text-gray-500" />
              </div>
            </div>
          </div>

          {/* ✅ Message */}
          <div>
            <label className="block font-montserrat text-black mb-1">Message</label>
            <textarea
              placeholder="Enter message here..."
              className="w-full border border-black bg-white rounded-md px-4 py-2 h-28 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            ></textarea>
          </div>

          {/* ✅ Submit Button */}
          <div className="flex justify-end">
            <button className="bg-slate-900 text-white font-semibold px-6 py-3 rounded-full border-2 border-gray-900 transition-all duration-300 hover:bg-white hover:text-gray-900">
              Send Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
