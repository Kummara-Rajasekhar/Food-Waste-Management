import React from 'react';

const About = () => {
  const donorInfo = {
    fullName: "Rajasekhar Kumar",
    email: "rajasekhar.donor@example.com",
    phone: "+91 98765 43210",
    address: "123, Green Street, Hyderabad, Telangana",
    organization: "Helping Hands NGO",
    joinedDate: "March 15, 2024",
    totalDonations: 27,
    foodTypePreference: "Cooked Meals, Packaged Foods",
    availability: "Weekends, Evenings",
    bio: "A passionate donor committed to reducing food waste and helping those in need. Loves organizing donation drives and working with local communities to ensure food security."
  };

  return (
    <div className="min-h-screen bg-[#f7fff9] p-6 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Profile Info</h2>

        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold">Full Name:</p>
            <p>{donorInfo.fullName}</p>
          </div>

          <div>
            <p className="font-semibold">Email:</p>
            <p>{donorInfo.email}</p>
          </div>

          <div>
            <p className="font-semibold">Phone:</p>
            <p>{donorInfo.phone}</p>
          </div>

          <div>
            <p className="font-semibold">Address:</p>
            <p>{donorInfo.address}</p>
          </div>

          <div>
            <p className="font-semibold">Organization:</p>
            <p>{donorInfo.organization}</p>
          </div>

          <div>
            <p className="font-semibold">Joined:</p>
            <p>{donorInfo.joinedDate}</p>
          </div>

          <div>
            <p className="font-semibold">Total Donations:</p>
            <p>{donorInfo.totalDonations}</p>
          </div>

          <div>
            <p className="font-semibold">Food Type Preference:</p>
            <p>{donorInfo.foodTypePreference}</p>
          </div>

          <div>
            <p className="font-semibold">Availability:</p>
            <p>{donorInfo.availability}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="font-semibold">About:</p>
          <p className="text-justify">{donorInfo.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
