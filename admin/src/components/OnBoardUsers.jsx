import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OnboardUsers = () => {
  const [userType, setUserType] = useState("NGO");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [onboardedList, setOnboardedList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { id: Date.now(), userType, name, email, location };
    setOnboardedList([newEntry, ...onboardedList]);

    
    setName("");
    setEmail("");
    setLocation("");
    setUserType("NGO");

    alert("✅ Successfully Registered!");
  };

  return (
    <motion.div
      className="p-6 bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-lg w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-pulse">🚀 Onboard NGOs & Volunteers</h2>

     
      <motion.form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow transition duration-300 hover:shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400"
          >
            <option value="NGO">NGO</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Enter full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Enter location"
          />
        </div>

        <div className="sm:col-span-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-2 transition hover:bg-blue-700"
          >
            + Onboard User
          </motion.button>
        </div>
      </motion.form>

      
      <AnimatePresence>
        {onboardedList.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-10"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">✅ Recently Onboarded</h3>
            <div className="overflow-auto max-h-72">
              <table className="w-full text-sm border border-gray-200 rounded-md shadow">
                <thead className="bg-gray-100 sticky top-0">
                  <tr>
                    <th className="border p-2">Type</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {onboardedList.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-blue-50 transition-colors duration-200"
                    >
                      <td className="border p-2">{user.userType}</td>
                      <td className="border p-2">{user.name}</td>
                      <td className="border p-2">{user.email}</td>
                      <td className="border p-2">{user.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default OnboardUsers;
