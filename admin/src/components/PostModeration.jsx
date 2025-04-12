import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Dashboard from "./DashBoard.jsx";
import UserManagement from "./UserManagement.jsx";
import DonationModeration from "./DonationModeration.jsx";
import DailyReports from "./DailyReports.jsx";
import OnboardUsers from "./OnBoardUsers.jsx";

const sidebarItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "User Management", path: "/user-management" },
  { name: "Donation Moderation", path: "/donation-moderation" },
  { name: "Daily Reports", path: "/daily-reports" },
  { name: "Onboard NGOs/Volunteers", path: "/onboard-users" },
];

const PostModeration = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-1/6 bg-gray-900 text-white shadow-lg"
      >
        <div className="p-6">
          <h2 className="text-2xl font-extrabold mb-6 tracking-wide">Admin Panel</h2>
          <ul className="space-y-3">
            {sidebarItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-blue-600 text-white font-semibold shadow"
                      : "hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      
      <motion.div
        key={location.pathname}
        className="w-5/6 p-6 overflow-y-auto"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/donation-moderation" element={<DonationModeration />} />
            <Route path="/daily-reports" element={<DailyReports />} />
            <Route path="/onboard-users" element={<OnboardUsers />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PostModeration;
