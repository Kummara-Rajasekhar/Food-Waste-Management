import React from 'react';
import { assets } from '../assets/assets'; // Using previously submitted image structure
import { useNavigate } from 'react-router-dom';

const HomeDonations = () => {
    const navigate=useNavigate()
  const foodPosts = [
    {
      id: 1,
      foodName: 'Cooked Rice & Curry',
      foodType: 'Cooked',
      quantity: 10,
      unit: 'Kg',
      freshness: 'Fresh',
      postedOn: '2024-04-10',
      location: 'Madhapur, Hyderabad',
      image: assets.one,
      donor: {
        name: 'Annapurna Kitchen',
        email: 'annapurna@example.com',
        organization: 'Annapurna Seva Foundation',
      },
    },
    {
      id: 2,
      foodName: 'Uncooked Vegetables',
      foodType: 'Raw',
      quantity: 5,
      unit: 'Kg',
      freshness: '1 Day Old',
      postedOn: '2024-04-09',
      location: 'Kondapur, Hyderabad',
      image: assets.two,
      donor: {
        name: 'Green Grocery',
        email: 'grocery@green.com',
        organization: 'Green Grocery Outlet',
      },
    },
    {
      id: 3,
      foodName: 'Packed Biryani Boxes',
      foodType: 'Cooked',
      quantity: 20,
      unit: 'Boxes',
      freshness: 'Same Day',
      postedOn: '2024-04-11',
      location: 'Gachibowli, Hyderabad',
      image: assets.three,
      donor: {
        name: 'Spice Hub',
        email: 'spicehub@donate.org',
        organization: 'Spice Hub Restaurants',
      },
    },
    {
      id: 1,
      foodName: 'Cooked Rice & Curry',
      foodType: 'Cooked',
      quantity: 10,
      unit: 'Kg',
      freshness: 'Fresh',
      postedOn: '2024-04-10',
      location: 'Madhapur, Hyderabad',
      image: assets.four,
      donor: {
        name: 'Annapurna Kitchen',
        email: 'annapurna@example.com',
        organization: 'Annapurna Seva Foundation',
      },
    },
    {
      id: 2,
      foodName: 'Uncooked Vegetables',
      foodType: 'Raw',
      quantity: 5,
      unit: 'Kg',
      freshness: '1 Day Old',
      postedOn: '2024-04-09',
      location: 'Kondapur, Hyderabad',
      image: assets.five,
      donor: {
        name: 'Green Grocery',
        email: 'grocery@green.com',
        organization: 'Green Grocery Outlet',
      },
    },
    {
      id: 3,
      foodName: 'Packed Biryani Boxes',
      foodType: 'Cooked',
      quantity: 20,
      unit: 'Boxes',
      freshness: 'Same Day',
      postedOn: '2024-04-11',
      location: 'Gachibowli, Hyderabad',
      image: assets.six,
      donor: {
        name: 'Spice Hub',
        email: 'spicehub@donate.org',
        organization: 'Spice Hub Restaurants',
      },
    },
    {
      id: 1,
      foodName: 'Cooked Rice & Curry',
      foodType: 'Cooked',
      quantity: 10,
      unit: 'Kg',
      freshness: 'Fresh',
      postedOn: '2024-04-10',
      location: 'Madhapur, Hyderabad',
      image: assets.seven,
      donor: {
        name: 'Annapurna Kitchen',
        email: 'annapurna@example.com',
        organization: 'Annapurna Seva Foundation',
      },
    },
    {
      id: 2,
      foodName: 'Uncooked Vegetables',
      foodType: 'Raw',
      quantity: 5,
      unit: 'Kg',
      freshness: '1 Day Old',
      postedOn: '2024-04-09',
      location: 'Kondapur, Hyderabad',
      image: assets.eight,
      donor: {
        name: 'Green Grocery',
        email: 'grocery@green.com',
        organization: 'Green Grocery Outlet',
      },
    },
    {
      id: 3,
      foodName: 'Packed Biryani Boxes',
      foodType: 'Cooked',
      quantity: 20,
      unit: 'Boxes',
      freshness: 'Same Day',
      postedOn: '2024-04-11',
      location: 'Gachibowli, Hyderabad',
      image: assets.nine,
      donor: {
        name: 'Spice Hub',
        email: 'spicehub@donate.org',
        organization: 'Spice Hub Restaurants',
      },
    },

    
  ];

  return (
    <div className="px-4 sm:px-10 py-10 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center animate-fade-in">
        Available Food Donations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodPosts.map((post) => (
          <div
          onClick={() => navigate('/details', { state: { post } })}
            key={post.id}
            className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden border border-green-100 transition-transform transform hover:-translate-y-1 duration-300"
          >
            <img
              src={post.image}
              alt={post.foodName}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-green-800">{post.foodName}</h3>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-medium">Type:</span> {post.foodType}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Quantity:</span> {post.quantity} {post.unit}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Freshness:</span> {post.freshness}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Posted On:</span> {post.postedOn}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Location:</span> {post.location}
              </p>

              <div className="mt-4 text-sm text-gray-600 border-t pt-3">
                <p className="font-semibold text-green-600">Donor Info</p>
                <p>{post.donor.name}</p>
                <p className="text-xs">{post.donor.organization}</p>
                <p className="text-xs">{post.donor.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDonations;
