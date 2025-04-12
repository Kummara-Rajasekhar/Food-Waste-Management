import React, { useState } from 'react';

const Donating = () => {
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [isVeg, setIsVeg] = useState(true); 
  const [isPreservable, setIsPreservable] = useState(true); 
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      foodType,
      quantity,
      location,
      expiryDate,
      isVeg,
      isPreservable,
      image,
    };

    console.log('Food Donation Submitted:', formData);

    
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className='min-h-screen p-6 bg-[#f0fdf4] text-gray-800'>
      <h2 className="text-3xl font-bold mb-6 text-center text-green-800">Donate Food</h2>

      <form onSubmit={handleSubmit} className='max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg'>
        <div className="mb-4">
          <label htmlFor="foodType" className="block text-sm font-medium text-gray-600">Food Type</label>
          <input
            type="text"
            id="foodType"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            placeholder="Enter the type of food"
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">Quantity (kg)</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter the quantity of food"
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-600">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter the location"
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">Expiry Date</label>
          <input
            type="date"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Food Type (Veg/Non-Veg)</label>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="veg"
                checked={isVeg}
                onChange={() => setIsVeg(true)}
                className="form-radio"
              />
              <span className="ml-2">Vegetarian</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="non-veg"
                checked={!isVeg}
                onChange={() => setIsVeg(false)}
                className="form-radio"
              />
              <span className="ml-2">Non-Vegetarian</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Preservability</label>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="preservable"
                checked={isPreservable}
                onChange={() => setIsPreservable(true)}
                className="form-radio"
              />
              <span className="ml-2">Preservable</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="non-preservable"
                checked={!isPreservable}
                onChange={() => setIsPreservable(false)}
                className="form-radio"
              />
              <span className="ml-2">Non-Preservable</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">Food Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            accept="image/*"
          />
        </div>

        <div className="mb-6 text-center">
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-all duration-300">
            Submit Donation
          </button>
        </div>
      </form>
    </div>
  );
};

export default Donating;
