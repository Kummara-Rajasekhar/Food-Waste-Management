import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
 

const ReceiverHome = () => {
  return (
    <div className="min-h-screen bg-green-50 p-6 flex flex-col md:flex-row items-center justify-center gap-10">
      
      <div className="flex-1 max-w-xl">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Together, We Can End Hunger</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Every day, tons of food go to waste while millions go hungry. Our platform connects food donors with receivers like you — helping communities, saving resources, and spreading kindness. Your role as a receiver brings hope to those in need.
        </p>
        <Link to="/donations">
          <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded shadow transition-all duration-300">
            View Available Donations
          </button>
        </Link>
      </div>

     
      <div className="flex-1 max-w-md">
        <img
          src={assets.headerimage}
          alt="Impact of Food Donation"
          className="rounded-2xl shadow-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ReceiverHome;
