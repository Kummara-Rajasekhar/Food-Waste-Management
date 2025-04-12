import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, Polyline, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};


const source = { lat: 13.4166, lng: 79.0000 }; 
const destination = { lat: 13.6355, lng: 79.4198 }; 

const generateRouteSteps = (src, dest, steps = 30) => {
  const latStep = (dest.lat - src.lat) / steps;
  const lngStep = (dest.lng - src.lng) / steps;

  const route = [];
  for (let i = 0; i <= steps; i++) {
    route.push({
      lat: src.lat + latStep * i,
      lng: src.lng + lngStep * i,
    });
  }
  return route;
};

const Tracking = () => {
  const [positionIndex, setPositionIndex] = useState(0);
  const route = generateRouteSteps(source, destination);
  const [currentPosition, setCurrentPosition] = useState(source);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < route.length) {
          setCurrentPosition(route[nextIndex]);
          return nextIndex;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 1500); 

    return () => clearInterval(interval);
  }, []);

  const receiverData = [
    { id: 1, name: 'Helping Hands NGO', status: 'Accepted', location: 'Connaught Place' },
    { id: 2, name: 'Food4All Foundation', status: 'Picked', location: 'Karol Bagh' },
    { id: 3, name: 'Hope Shelter', status: 'Verified', location: 'Rajiv Chowk' },
    { id: 1, name: 'Helping Hands NGO', status: 'Accepted', location: 'Connaught Place' },
    { id: 2, name: 'Food4All Foundation', status: 'Picked', location: 'Karol Bagh' },
    { id: 3, name: 'Hope Shelter', status: 'Verified', location: 'Rajiv Chowk' },
    { id: 4, name: 'Seva Kitchen', status: 'Pending', location: 'CP Metro Station' },
  ];

  return (
    <div className="min-h-screen p-6 bg-[#f0fdf4] text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-800">
        Live Tracking: Source to Destination
      </h2>

      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={13}
        >
          
          <Polyline
            path={route}
            options={{
              strokeColor: '#34d399',
              strokeOpacity: 0.8,
              strokeWeight: 4,
            }}
          />

         
          <Marker
            position={source}
            label="Start"
            icon="https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          />

         
          <Marker
            position={destination}
            label="End"
            icon="https://maps.google.com/mapfiles/ms/icons/red-dot.png"
          />

         
          <Marker
            position={currentPosition}
            label="Transport"
            icon="https://maps.google.com/mapfiles/ms/icons/truck.png"
          />
        </GoogleMap>
      ) : (
        <p className="text-center">Loading Map...</p>
      )}

     
      <div className="text-center mt-4 text-sm text-gray-600">
        📍 Current Position – Lat: {currentPosition.lat.toFixed(5)}, Lng: {currentPosition.lng.toFixed(5)}
      </div>

      <div className="overflow-x-auto">
        <h3 className="text-2xl font-semibold mb-4 text-green-700 text-center">Receivers' Status</h3>
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
          <thead className="bg-green-100">
            <tr>
              <th className="text-left py-2 px-4">Name</th>
              <th className="text-left py-2 px-4">Location</th>
              <th className="text-left py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {receiverData.map((receiver) => (
              <tr key={receiver.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-2 px-4">{receiver.name}</td>
                <td className="py-2 px-4">{receiver.location}</td>
                <td className={`py-2 px-4 font-medium ${
                  receiver.status === 'Verified' ? 'text-green-700' :
                  receiver.status === 'Picked' ? 'text-blue-700' :
                  receiver.status === 'Accepted' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {receiver.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tracking;
