import React, { useState } from 'react';
import { assets } from '../assets/assets';

const donations = [
    {
      _id: '1',
      foodName: 'Vegetable Biryani',
      quantity: '10 kg',
      location: 'New Delhi, India',
      expiryDate: '2025-04-13',
      postedDate: '2025-04-12T09:30:00Z',
      image: assets.one,
      status: 'Available', 
      requestedByReceiver: false, 
    },
    {
      _id: '2',
      foodName: 'Fruit Packets',
      quantity: '15 packets',
      location: 'Mumbai, India',
      expiryDate: '2025-04-14',
      postedDate: '2025-04-12T11:00:00Z',
      image: assets.two,
      status: 'Available',
      requestedByReceiver: false,
    },
    {
      _id: '3',
      foodName: 'Bread & Butter',
      quantity: '20 pieces',
      location: 'Bangalore, India',
      expiryDate: '2025-04-15',
      postedDate: '2025-04-12T08:15:00Z',
      image: assets.three,
      status: 'Available',
      requestedByReceiver: false,
    },
    {
      _id: '4',
      foodName: 'Vegetable Salad',
      quantity: '8 kg',
      location: 'Chennai, India',
      expiryDate: '2025-04-16',
      postedDate: '2025-04-12T10:45:00Z',
      image: assets.four,
      status: 'Available',
      requestedByReceiver: false,
    },
    {
      _id: '5',
      foodName: 'Pizza',
      quantity: '5 large pizzas',
      location: 'Hyderabad, India',
      expiryDate: '2025-04-14',
      postedDate: '2025-04-12T14:30:00Z',
      image: assets.five,
      status: 'Available',
      requestedByReceiver: false,
    },
    {
      _id: '6',
      foodName: 'Rice Pudding',
      quantity: '12 kg',
      location: 'Pune, India',
      expiryDate: '2025-04-17',
      postedDate: '2025-04-12T15:00:00Z',
      image: assets.six,
      status: 'Available',
      requestedByReceiver: false,
    },
    {
      _id: '7',
      foodName: 'Samosas',
      quantity: '50 pieces',
      location: 'Kolkata, India',
      expiryDate: '2025-04-13',
      postedDate: '2025-04-12T12:30:00Z',
      image: assets.seven,
      status: 'Available',
      requestedByReceiver: false,
    },
    {
      _id: '8',
      foodName: 'Pasta',
      quantity: '30 servings',
      location: 'Delhi, India',
      expiryDate: '2025-04-18',
      postedDate: '2025-04-12T13:00:00Z',
      image: assets.eight,
      status: 'Available',
      requestedByReceiver: false,
    },
    {
      _id: '9',
      foodName: 'Chicken Curry',
      quantity: '15 kg',
      location: 'Lucknow, India',
      expiryDate: '2025-04-19',
      postedDate: '2025-04-12T16:45:00Z',
      image: assets.nine,
      status: 'Available',
      requestedByReceiver: false,
    },
    {
      _id: '10',
      foodName: 'Dosa & Idli',
      quantity: '40 pieces',
      location: 'Coimbatore, India',
      expiryDate: '2025-04-14',
      postedDate: '2025-04-12T17:30:00Z',
      image: assets.ten,
      status: 'Available',
      requestedByReceiver: false,
    },
    {
      _id: '11',
      foodName: 'Vegetable Soup',
      quantity: '25 liters',
      location: 'Kochi, India',
      expiryDate: '2025-04-20',
      postedDate: '2025-04-12T18:00:00Z',
      image: assets.ele,
      status: 'Available',
      requestedByReceiver: false,
    },
    {
      _id: '12',
      foodName: 'Momos',
      quantity: '60 pieces',
      location: 'Jaipur, India',
      expiryDate: '2025-04-13',
      postedDate: '2025-04-12T19:00:00Z',
      image: assets.twe,
      status: 'Available',
      requestedByReceiver: false,
    },
  ];
  

const Donations = () => {
  const [donationsList, setDonationsList] = useState(donations);

  const handleRequestPickup = (donationId) => {
    setDonationsList((prevDonations) =>
      prevDonations.map((donation) =>
        donation._id === donationId
          ? {
              ...donation,
              status: 'Requested by Receiver',
              requestedByReceiver: true, 
            }
          : donation
      )
    );
  };

  const handleConfirmDonation = (donationId) => {
    setDonationsList((prevDonations) =>
      prevDonations.map((donation) =>
        donation._id === donationId
          ? {
              ...donation,
              status: 'Confirmed', 
              requestedByReceiver: false, 
            }
          : donation
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <h2 className="text-4xl font-extrabold text-center text-green-900 mb-10 drop-shadow-md">
        🍲 Available Food Donations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {donationsList.map((donation) => (
          <div
            key={donation._id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-200 hover:scale-[1.02]"
          >
            <img
              src={donation.image}
              alt={donation.foodName}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 relative">
              <h3 className="text-2xl font-semibold text-green-800 mb-3">{donation.foodName}</h3>

              <div className="flex flex-wrap gap-2 text-sm mb-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  📍 {donation.location}
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  🕒 Expires: {donation.expiryDate}
                </span>
              </div>

              <p className="text-gray-700 mb-2">
                <strong>Quantity:</strong> {donation.quantity}
              </p>
              <p className="text-gray-500 text-xs">
                Posted on: {new Date(donation.postedDate).toLocaleString()}
              </p>

              <button
                onClick={() =>
                  donation.status === 'Available'
                    ? handleRequestPickup(donation._id)
                    : donation.status === 'Requested by Receiver'
                    ? handleConfirmDonation(donation._id)
                    : null
                }
                className={`mt-4 py-2 px-5 rounded-full transition-all duration-300 ${
                  donation.status === 'Requested by Receiver'
                    ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                    : donation.status === 'Confirmed'
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {donation.status === 'Available'
                  ? 'Request Pickup'
                  : donation.status === 'Requested by Receiver'
                  ? 'Confirm Donation'
                  : 'Confirmed'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donations;
