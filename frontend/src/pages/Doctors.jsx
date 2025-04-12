import React from 'react';
import { assets } from '../assets/assets';

const Doctors = () => {
  // Sample donation data (replace or expand as needed)
  const donations = [
    {
      _id: '1',
      foodType: 'Vegetable Curry',
      quantity: 8,
      status: 'Picked',
      expiryWindow: '2 hours',
      createdAt: '2025-04-10T14:30:00Z',
      image: assets.one
    },
    {
      _id: '2',
      foodType: 'Fruit Basket',
      quantity: 15,
      status: 'Pending',
      expiryWindow: '4 hours',
      createdAt: '2025-04-11T10:15:00Z',
      image: assets.two
    },
    {
      _id: '3',
      foodType: 'Chicken Stew',
      quantity: 25,
      status: 'Delivered',
      expiryWindow: '6 hours',
      createdAt: '2025-04-09T18:45:00Z',
      image: assets.three
    },
    {
      _id: '4',
      foodType: 'Vegetable Soup',
      quantity: 8,
      status: 'Picked',
      expiryWindow: '2 hours',
      createdAt: '2025-04-10T14:30:00Z',
      image: assets.four
    },
    {
      _id: '5',
      foodType: 'Pasta Salad',
      quantity: 15,
      status: 'Pending',
      expiryWindow: '4 hours',
      createdAt: '2025-04-11T10:15:00Z',
      image: assets.five
    },
    {
      _id: '6',
      foodType: 'Grilled Fish',
      quantity: 25,
      status: 'Delivered',
      expiryWindow: '6 hours',
      createdAt: '2025-04-09T18:45:00Z',
      image: assets.six
    },
    {
      _id: '7',
      foodType: 'Rice Pudding',
      quantity: 8,
      status: 'Picked',
      expiryWindow: '2 hours',
      createdAt: '2025-04-10T14:30:00Z',
      image: assets.seven
    },
    {
      _id: '8',
      foodType: 'Sandwiches',
      quantity: 15,
      status: 'Pending',
      expiryWindow: '4 hours',
      createdAt: '2025-04-11T10:15:00Z',
      image: assets.eight
    },
    {
      _id: '9',
      foodType: 'Beef Tacos',
      quantity: 25,
      status: 'Delivered',
      expiryWindow: '6 hours',
      createdAt: '2025-04-09T18:45:00Z',
      image: assets.ten
    },
    {
      _id: '10',
      foodType: 'Caesar Salad',
      quantity: 8,
      status: 'Picked',
      expiryWindow: '2 hours',
      createdAt: '2025-04-10T14:30:00Z',
      image: assets.ele
    },
    {
      _id: '11',
      foodType: 'Vegan Burger',
      quantity: 15,
      status: 'Pending',
      expiryWindow: '4 hours',
      createdAt: '2025-04-11T10:15:00Z',
      image: assets.twe
    },
    {
      _id: '12',
      foodType: 'Vegetable Stir-Fry',
      quantity: 25,
      status: 'Delivered',
      expiryWindow: '6 hours',
      createdAt: '2025-04-09T18:45:00Z',
      image: assets.one
    },
    {
      _id: '13',
      foodType: 'Fried Chicken',
      quantity: 8,
      status: 'Picked',
      expiryWindow: '2 hours',
      createdAt: '2025-04-10T14:30:00Z',
      image: assets.two
    },
    {
      _id: '14',
      foodType: 'Vegetarian Pizza',
      quantity: 15,
      status: 'Pending',
      expiryWindow: '4 hours',
      createdAt: '2025-04-11T10:15:00Z',
      image: assets.three
    },
    {
      _id: '15',
      foodType: 'Pancakes',
      quantity: 25,
      status: 'Delivered',
      expiryWindow: '6 hours',
      createdAt: '2025-04-09T18:45:00Z',
      image: assets.four
    }
  ];

  return (
    <div className='min-h-screen p-6 bg-[#f0fdf4] text-gray-800'>
      <h2 className='text-3xl font-extrabold mb-8 text-center text-green-800 animate__animated animate__fadeIn'>
        My Donations
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {donations.map((donation) => (
          <div
            key={donation._id}
            className='bg-white rounded-xl shadow-xl p-4 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform hover:translate-y-[-10px]'
          >
            <img
              src={donation.image}
              alt={donation.foodType}
              className='w-full h-40 object-cover rounded-md mb-4 transition-all duration-500 ease-in-out hover:opacity-80'
            />
            <h3 className='text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 ease-in-out hover:text-green-600'>
              {donation.foodType}
            </h3>
            <p className='text-sm text-gray-600 mb-1'>
              <strong>Quantity:</strong> {donation.quantity} kg
            </p>
            <p className='text-sm text-gray-600 mb-1'>
              <strong>Status:</strong> {donation.status}
            </p>
            <p className='text-sm text-gray-600 mb-1'>
              <strong>Expires in:</strong> {donation.expiryWindow}
            </p>
            <p className='text-xs text-gray-400'>
              Posted on: {new Date(donation.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
