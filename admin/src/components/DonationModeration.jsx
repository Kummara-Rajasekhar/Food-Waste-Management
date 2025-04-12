import React, { useState } from "react";

const mockDonations = [
  {
    id: 1,
    foodName: "Apple",
    quantity: "10 kg",
    location: "New York",
    expiryDate: "2025-04-15",
    status: "Pending",
    flagged: false,
  },
  {
    id: 2,
    foodName: "Bread",
    quantity: "5 kg",
    location: "Los Angeles",
    expiryDate: "2025-04-10",
    status: "Approved",
    flagged: true,
  },
  {
    id: 1,
    foodName: "Apple",
    quantity: "10 kg",
    location: "New York",
    expiryDate: "2025-04-15",
    status: "Pending",
    flagged: false,
  },
  {
    id: 2,
    foodName: "Bread",
    quantity: "5 kg",
    location: "Los Angeles",
    expiryDate: "2025-04-10",
    status: "Approved",
    flagged: true,
  },
];

const DonationModeration = () => {
  const [donations, setDonations] = useState(mockDonations);

  
  const handleFlagDonation = (id) => {
    setDonations(
      donations.map((donation) =>
        donation.id === id
          ? { ...donation, flagged: !donation.flagged }
          : donation
      )
    );
  };

  
  const handleApproval = (id, action) => {
    setDonations(
      donations.map((donation) =>
        donation.id === id
          ? { ...donation, status: action }
          : donation
      )
    );
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Food Donation Moderation</h3>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Food Name</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Expiry Date</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr
              key={donation.id}
              className={donation.flagged ? "bg-yellow-300" : ""}
            >
              <td className="border px-4 py-2">{donation.foodName}</td>
              <td className="border px-4 py-2">{donation.quantity}</td>
              <td className="border px-4 py-2">{donation.location}</td>
              <td className="border px-4 py-2">{donation.expiryDate}</td>
              <td className="border px-4 py-2">{donation.status}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
                  onClick={() => handleApproval(donation.id, "Approved")}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
                  onClick={() => handleApproval(donation.id, "Rejected")}
                >
                  Reject
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                  onClick={() => handleFlagDonation(donation.id)}
                >
                  {donation.flagged ? "Unflag" : "Flag"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationModeration;
