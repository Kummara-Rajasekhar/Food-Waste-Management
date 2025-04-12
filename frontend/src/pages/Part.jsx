import React from 'react';
import { assets } from '../assets/assets';

const Part = () => {
  return (
    <div className="max-w-6xl mx-auto p-5 md:p-10 text-center">
      
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-5">
        A Solvable Problem
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
        Service organizations want access to excess food, but there are barriers — locating the excess food,
        establishing their credentials, and efficiently deploying resources to transport food. Waste No Food
        breaks down these barriers.
      </p>

     
      <div className="flex flex-col md:flex-row justify-between gap-5">
        
        
        <div className="flex-1 p-5 border-2 border-green-200 rounded-lg">
          <div className="w-16 h-16 mx-auto mb-5 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600">
            [Raw Food Icon]
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Raw Food</h2>
          <p className="text-base text-gray-600 leading-snug">
            40% of all food is thrown away or plowed over. In California, 100 billion
          </p>
        </div>

        
        <div className="flex-1 p-5 border-2 border-blue-200 rounded-lg">
          <div className="w-16 h-16 mx-auto mb-5 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600">
            [Prepared Food Icon]
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Prepared Food</h2>
          <p className="text-base text-gray-600 leading-snug">
            In California alone, over 5 billion pounds of prepared food is thrown away every
          </p>
        </div>

        
        <div className="flex-1 p-5 border-2 border-red-200 rounded-lg">
          <div className="w-16 h-16 mx-auto mb-5 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600">
            [Hunger Icon]
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Hunger</h2>
          <p className="text-base text-gray-600 leading-snug">
            If only one-third of California’s excess food were diverted, it would resolve the hunger
          </p>
        </div>
      </div>
    </div>
  );
};

export default Part;