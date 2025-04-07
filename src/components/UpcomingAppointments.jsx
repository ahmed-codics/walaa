import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UpcomingAppointments = ({ userId, onCheck }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!userId) return;

    const fetchAppointments = async () => {
      try {
<<<<<<< HEAD
        const { data } = await axios.get(
          `https://walaaback-production-7c7e.up.railway.app/api/bookings/user/${userId}`,
          { withCredentials: true }
        );
=======
        const { data } = await axios.get(`https://walaaback-production-7c7e.up.railway.app/api/bookings/user/${userId}`, {
          withCredentials: true,
        });
>>>>>>> c2d711e108ee0992dc36fc572d17b975f59af997
        setAppointments(data);
        onCheck(data); // Trigger onCheck to update hasAppointments in the parent
      } catch (error) {
        console.error("Error fetching appointments:", error);
        toast.error("Failed to fetch appointments.");
      }
    };

    fetchAppointments();
  }, [userId, onCheck]);

  // ✅ Delete an appointment
  const deleteAppointment = async (id) => {
    try {
<<<<<<< HEAD
      await axios.delete(
        `https://walaaback-production-7c7e.up.railway.app/api/bookings/${id}`,
        { withCredentials: true }
      );
=======
      await axios.delete(`https://walaaback-production-7c7e.up.railway.app/api/bookings/${id}`, { withCredentials: true });
>>>>>>> c2d711e108ee0992dc36fc572d17b975f59af997
      setAppointments((prev) => prev.filter((appt) => appt._id !== id));
      toast.success("Appointment deleted!");
    } catch (error) {
      console.error("Error deleting appointment:", error);
      toast.error("Failed to delete appointment.");
    }
  };

  // ✅ Open Edit Modal
  const openEditModal = (appointment) => {
    setEditingAppointment(appointment);
    setNewDate(appointment.date);
    setNewTime(appointment.time);
  };

  // ✅ Close Edit Modal
  const closeEditModal = () => {
    setEditingAppointment(null);
    setNewDate("");
    setNewTime("");
  };

  // ✅ Handle Edit Submission
  const updateAppointment = async () => {
    if (!newDate || !newTime)
      return toast.error("Please select a valid date and time.");

    try {
<<<<<<< HEAD
      await axios.put(
        `https://walaaback-production-7c7e.up.railway.app/api/bookings/${editingAppointment._id}`,
        {
          date: newDate,
          time: newTime,
        }
      );
=======
      await axios.put(`https://walaaback-production-7c7e.up.railway.app/api/bookings/${editingAppointment._id}`, {
        date: newDate,
        time: newTime,
      });
>>>>>>> c2d711e108ee0992dc36fc572d17b975f59af997

      setAppointments((prev) =>
        prev.map((appt) =>
          appt._id === editingAppointment._id ? { ...appt, date: newDate, time: newTime } : appt
        )
      );

      toast.success("Appointment updated!");
      closeEditModal();
    } catch (error) {
      console.error("Error updating appointment:", error);
      toast.error("Failed to update appointment.");
    }
  };

  if (appointments.length === 0) return null;

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Appointments</h2>

      {appointments.map((appointment) => (
        <div key={appointment._id} className="p-4 border-b last:border-b-0 flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold text-gray-700">{appointment.doctorName}</p>
            <p className="text-gray-600">
              {appointment.date} at {appointment.time}
            </p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => openEditModal(appointment)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-all"
            >
              Edit
            </button>
            <button
              onClick={() => deleteAppointment(appointment._id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingAppointments;
