import React, { useState } from 'react';

// Haversine formula to calculate distance
const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) ** 2;
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

const Filter = () => {
    const donations = [
        {
          _id: '1',
          foodName: 'Veg Biryani',
          quantity: '5kg',
          location: 'Koramangala, Bangalore',
          foodType: 'Veg',
          expiryDate: '2025-04-14T18:00:00Z',
          lat: 12.9352,
          lng: 77.6146,
        },
        {
          _id: '2',
          foodName: 'Chicken Curry',
          quantity: '10kg',
          location: 'MG Road, Bangalore',
          foodType: 'Non-Veg',
          expiryDate: '2025-04-15T18:00:00Z',
          lat: 12.9744,
          lng: 77.6055,
        },
        {
          _id: '3',
          foodName: 'Bread Loaves',
          quantity: '15 pieces',
          location: 'Connaught Place, Delhi',
          foodType: 'Veg',
          expiryDate: '2025-04-13T18:00:00Z',
          lat: 28.6315,
          lng: 77.2167,
        },
        {
          _id: '4',
          foodName: 'Fruit Salad',
          quantity: '8 bowls',
          location: 'Indiranagar, Bangalore',
          foodType: 'Veg',
          expiryDate: '2025-04-12T23:59:00Z',
          lat: 12.9719,
          lng: 77.6412,
        },
        {
          _id: '1',
          foodName: 'Non Biryani',
          quantity: '5kg',
          location: 'Koramangala, Bangalore',
          foodType: 'Veg',
          expiryDate: '2025-04-14T18:00:00Z',
          lat: 12.9352,
          lng: 77.6146,
        },
        {
          _id: '2',
          foodName: 'Motton Curry',
          quantity: '10kg',
          location: 'MG Road, Bangalore',
          foodType: 'Non-Veg',
          expiryDate: '2025-04-15T18:00:00Z',
          lat: 12.9744,
          lng: 77.6055,
        },
        {
          _id: '3',
          foodName: 'Bread and Jam',
          quantity: '15 pieces',
          location: 'Connaught Place, Delhi',
          foodType: 'Veg',
          expiryDate: '2025-04-13T18:00:00Z',
          lat: 28.6315,
          lng: 77.2167,
        },
        {
          _id: '4',
          foodName: 'Chapathi',
          quantity: '8 bowls',
          location: 'Indiranagar, Bangalore',
          foodType: 'Veg',
          expiryDate: '2025-04-12T23:59:00Z',
          lat: 12.9719,
          lng: 77.6412,
        },
        {
          _id: '1',
          foodName: 'Veg Biryani',
          quantity: '5kg',
          location: 'Koramangala, Bangalore',
          foodType: 'Veg',
          expiryDate: '2025-04-14T18:00:00Z',
          lat: 12.9352,
          lng: 77.6146,
        },
        {
          _id: '2',
          foodName: 'Prawn Curry',
          quantity: '10kg',
          location: 'MG Road, Bangalore',
          foodType: 'Non-Veg',
          expiryDate: '2025-04-15T18:00:00Z',
          lat: 12.9744,
          lng: 77.6055,
        },
        {
          _id: '3',
          foodName: 'Meals',
          quantity: '15 pieces',
          location: 'Connaught Place, Delhi',
          foodType: 'Veg',
          expiryDate: '2025-04-13T18:00:00Z',
          lat: 28.6315,
          lng: 77.2167,
        },
        {
          _id: '4',
          foodName: 'Dum Biryani',
          quantity: '8 bowls',
          location: 'Indiranagar, Bangalore',
          foodType: 'Veg',
          expiryDate: '2025-04-12T23:59:00Z',
          lat: 12.9719,
          lng: 77.6412,
        },
      ];

  const [userLocation] = useState({ lat: 12.9716, lng: 77.5946 });
  const [filters, setFilters] = useState({
    maxDistance: 10,
    foodType: '',
    freshnessDays: 1,
  });
  const [filtered, setFiltered] = useState([]);

  const handleFilter = () => {
    const now = new Date();
    const result = donations.filter((donation) => {
      const distance = getDistance(
        userLocation.lat,
        userLocation.lng,
        donation.lat,
        donation.lng
      );
      const expiry = new Date(donation.expiryDate);
      const daysToExpire = (expiry - now) / (1000 * 60 * 60 * 24);

      return (
        distance <= filters.maxDistance &&
        (!filters.foodType || donation.foodType === filters.foodType) &&
        daysToExpire >= 0 &&
        daysToExpire <= filters.freshnessDays
      );
    });

    setFiltered(result);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-3xl font-extrabold text-center text-white mb-8 animate__animated animate__fadeIn animate__delay-1s">
        🍱 Food Donation Filter
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block font-medium text-white mb-2">📏 Max Distance (km)</label>
          <input
            type="number"
            value={filters.maxDistance}
            onChange={(e) =>
              setFilters({ ...filters, maxDistance: Number(e.target.value) })
            }
            className="w-full p-3 rounded-md border-2 border-blue-400 text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        <div>
          <label className="block font-medium text-white mb-2">🍽 Food Type</label>
          <select
            value={filters.foodType}
            onChange={(e) =>
              setFilters({ ...filters, foodType: e.target.value })
            }
            className="w-full p-3 rounded-md border-2 border-blue-400 text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <option value="">All Food Types</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-white mb-2">⏳ Freshness (days)</label>
          <input
            type="number"
            value={filters.freshnessDays}
            onChange={(e) =>
              setFilters({ ...filters, freshnessDays: Number(e.target.value) })
            }
            className="w-full p-3 rounded-md border-2 border-blue-400 text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
      </div>

      <button
        onClick={handleFilter}
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Filter
      </button>

      {filtered.length > 0 ? (
        <ul className="space-y-6">
          {filtered.map((item) => (
            <li
              key={item._id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-800">{item.foodName}</h3>
              <p className="text-gray-600">📍 {item.location}</p>
              <p className="text-gray-600">🍽 Type: {item.foodType}</p>
              <p className="text-gray-600">📦 Quantity: {item.quantity}</p>
              <p className="text-gray-600">⏳ Expires: {new Date(item.expiryDate).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-200 text-center">No donations match your filters yet.</p>
      )}
    </div>
  );
};

export default Filter;
