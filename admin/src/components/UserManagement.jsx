import React, { useState } from "react";

const mockUsers = [
  { id: 1, name: "John Doe", role: "Donor", location: "New York", verified: true },
  { id: 2, name: "Jane Smith", role: "Receiver", location: "Los Angeles", verified: false },
  { id: 1, name: "John Doe", role: "Donor", location: "New York", verified: true },
  { id: 2, name: "Jane Smith", role: "Receiver", location: "Los Angeles", verified: false },
  { id: 1, name: "John Doe", role: "Donor", location: "New York", verified: true },
  { id: 2, name: "Jane Smith", role: "Receiver", location: "Los Angeles", verified: false },
  { id: 1, name: "John Doe", role: "Donor", location: "New York", verified: true },
  { id: 2, name: "Jane Smith", role: "Receiver", location: "Los Angeles", verified: false },
  { id: 1, name: "John Doe", role: "Donor", location: "New York", verified: true },
  { id: 2, name: "Jane Smith", role: "Receiver", location: "Los Angeles", verified: false },
];

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers);

  
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">User Management</h3>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Verified</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">{user.location}</td>
              <td className="border px-4 py-2">{user.verified ? "Yes" : "No"}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
                  onClick={() => alert(`Editing ${user.name}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
