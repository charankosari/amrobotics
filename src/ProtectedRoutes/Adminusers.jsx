import React, { useState } from 'react';
import './AdminStyles.css';
import { X } from 'react-feather';
const AdminUsers = () => {
  const users = [
    {
      "id": 1,
      "username": "john_doe",
      "email": "john@example.com",
      "role": "admin"
    },
    {
      "id": 2,
      "username": "jane_doe",
      "email": "jane@example.com",
      "role": "user"
    },
    {
      "id": 3,
      "username": "alice_smith",
      "email": "alice@example.com",
      "role": "user"
    },
    {
      "id": 4,
      "username": "john_doe",
      "email": "john@example.com",
      "role": "admin"
    },
    {
      "id": 5,
      "username": "jane_doe",
      "email": "jane@example.com",
      "role": "user"
    },
    {
      "id": 6,
      "username": "alice_smith",
      "email": "alice@example.com",
      "role": "user"
    },
    {
      "id": 7,
      "username": "john_doe",
      "email": "john@example.com",
      "role": "admin"
    },
    {
      "id": 8,
      "username": "jane_doe",
      "email": "jane@example.com",
      "role": "user"
    },
    {
      "id": 9,
      "username": "alice_smith",
      "email": "alice@example.com",
      "role": "user"
    },
    {
      "id": 10,
      "username": "john_doe",
      "email": "john@example.com",
      "role": "admin"
    },
    {
      "id": 11,
      "username": "jane_doe",
      "email": "jane@example.com",
      "role": "user"
    },
    {
      "id": 12,
      "username": "alice_smith",
      "email": "alice@example.com",
      "role": "user"
    },
  ];
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };
  const [selectedRoles, setSelectedRoles] = useState({});


  const Modal = ({ onClose, user }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50" >
        <div className="bg-white p-6 rounded-lg shadow-md text-black " >
        <button onClick={onClose} className="absolute  mt-1 mr-2 text-red-500 focus:outline-none ml-[11.5rem]"><X /></button>
          <h2 className="text-2xl font-bold mb-4">Edit User Role</h2>
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          {/* <p>Email: {user.email}</p> */}
          <div className="mt-4">
            <h1>Update role :</h1>
          <select
              value={selectedRoles[user.id] || ''}
                 onChange={(e) => handleRoleChange(user.id, e.target.value)}
                 className="w-[130px] border border-gray-300 bg-white text-black rounded-md px-2 py-1"
               >
                 <option value="">Select Role</option>
                 <option value="admin">Admin</option>
                 <option value="user">User</option>
               </select>
          </div>
          <button onClick={onClose} className="bg-gray-500 text-white px-3 py-1 rounded mt-4">Update</button>
        </div>
      </div>
    );
  };
  return (
    <div className="container mx-auto p-4 lg:w-[90%]] xl:w-[66%]  block ">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>

      <div>
        <ul>
          {users.map(user => (
            <li key={user.id} className="flex items-center sm:flex-row flex-col justify-between border-b py-2">
              <div>

                <p className="text-lg">{user.id}. {user.username}</p>
                <p className="text-gray-500">Email: {user.email}</p>
              </div>
              <div>
              
                <button onClick={() => handleEditUser(user)}  className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit Role</button>
                <button  className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedUser && <Modal onClose={handleCloseModal} user={selectedUser} />}
    </div>
  );
};

export default AdminUsers;
