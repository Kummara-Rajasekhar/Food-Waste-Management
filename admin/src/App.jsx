import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashBoard from './pages/Admin/DashBoard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import DoctorDashBoard from './pages/Doctor/DoctorDashBoard';
import DoctorAppointment from './pages/Doctor/DoctorAppointment';
import DoctorProfile from './pages/Doctor/DoctorProfile';
import PostModeration from './components/PostModeration';
import AdminHome from './pages/AdminHome';
import AdminLogin from './pages/Llogin'; // Make sure this import is correct

const App = () => {
  const isLoggedIn = localStorage.getItem("login") === "true";

  return (
    <>
      <ToastContainer />
      
        <div className="bg-[#f9f9fd]">
          <Navbar />
          <AdminHome/>
          <div className="flex items-start">
            <Sidebar />
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/admin-dashboard" element={<DashBoard />} />
              <Route path="/all-appointments" element={<AllAppointments />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/doctor-list" element={<DoctorsList />} />
              <Route path="/doctor-dashboard" element={<DoctorDashBoard />} />
              <Route path="/doctor-appointments" element={<DoctorAppointment />} />
              <Route path="/doctor-profile" element={<DoctorProfile />} />
              <Route path="/admin-home" element={<AdminHome />} />
              <Route path="/postmoderation" element={<PostModeration />} />
            </Routes>
          </div>
        </div>
    </>
  );
};

export default App;
