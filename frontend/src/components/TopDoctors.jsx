import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '10px', 
};

const TopDoctors = () => {
  const [currentPosition, setCurrentPosition] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => alert('Please allow location access'),
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h2 className="text-3xl font-bold mb-6 text-green-800 animate__animated animate__fadeIn">
        Live Location Tracking
      </h2>

      {isLoaded && currentPosition ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={15}
          className="transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
        >
          <Marker position={currentPosition} />
        </GoogleMap>
      ) : (
        <p className='text-lg text-gray-600 animate__animated animate__fadeIn'>
          Loading map...
        </p>
      )}
    </div>
  );
};

export default TopDoctors;
