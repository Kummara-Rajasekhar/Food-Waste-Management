import React from "react";

const DailyReports = () => {
  const reportData = {
    foodSavedKg: 1200,
    peopleServed: 850,
    emissionPrevented: 460, 
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">📊 Daily Reports</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        
        <div className="bg-green-100 p-4 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-green-700">🥗 {reportData.foodSavedKg} kg</p>
          <p className="text-gray-600">Food Saved</p>
        </div>

        
        <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-blue-700">👥 {reportData.peopleServed}</p>
          <p className="text-gray-600">People Served</p>
        </div>

        
        <div className="bg-yellow-100 p-4 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-yellow-700">🌍 {reportData.emissionPrevented} kg CO₂</p>
          <p className="text-gray-600">Emission Prevented</p>
        </div>
      </div>
    </div>
  );
};

export default DailyReports;
