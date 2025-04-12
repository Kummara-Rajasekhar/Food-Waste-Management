import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const LiveDonorMap = () => {
  const [location, setLocation] = useState({ lat: 13.6355, lng: 79.4198 });

  useEffect(() => {
    const updateDonorLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation = { lat: latitude, lng: longitude };
          setLocation(newLocation);
          localStorage.setItem("donorLocation", JSON.stringify(newLocation));
        },
        (err) => console.error("Error getting location:", err),
        { enableHighAccuracy: true }
      );
    };

    updateDonorLocation(); // Initial call
    const interval = setInterval(updateDonorLocation, 10000); // Every 10s

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-center text-green-700">📍 Live Donor Location</h2>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LiveDonorMap;
