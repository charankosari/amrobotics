import React, { useEffect, useState } from 'react';
import './AdminStyles.css';
import { X } from 'react-feather';
import axios from 'axios'
const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [search,setSearch]=useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);


  const searchUser = () => {
    const filteredUsers = users.filter(user => {
      const searchLower = search.toLowerCase();
      return user.name.toLowerCase().includes(searchLower) || user.email.toLowerCase().includes(searchLower);
    });
    setFilteredUsers(filteredUsers);
  };
  

  const clearSearch = () => {
    setSearch('');
    setFilteredUsers([]);
  };

  //fetching users
  const fetchUsers = async () => {
    try {
      const authToken = localStorage.getItem('jwtToken'); // Replace with your actual authentication token
      const response = await axios.get('http://localhost:5080/api/v1/admin/getallusers', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);

  //deleting users
  const deleteUser = async (user) => {
    try {
      const id = user._id;
      const authToken = localStorage.getItem('jwtToken');
      const response = await axios.delete(`http://localhost:5080/api/v1/admin/user/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
  
      if (response.status === 200 ) {
        alert('User deleted successfully');
        fetchUsers();
      } else {
        alert(`Failed to delete user: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('An error occurred while deleting the user');
    }
  };
  
  
  //updating role of users
  const handleUpdateUser = async (userId, role) => {
    try {
      const authToken = localStorage.getItem('jwtToken');
      console.log(userId,role);
      const response = await axios.put(
        `http://localhost:5080/api/v1/admin/user/${userId}`,
        { role },
        {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        }
      );

      if (response.status === 201) {
        alert('User updated successfully');
        // Close the modal
        fetchUsers(); // Refresh user list
      } else {
        alert(`Failed to update user: ${response.statusText}`);
        fetchUsers(); // Refresh user list
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('An error occurred while updating the user');
    }
  };


  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };
  

  const handleCloseModal = () => {
    setSelectedUser(null);
  };
  const [selectedRoles, setSelectedRoles] = useState('');
  

 
  const Modal = ({ onClose, user }) => {
    const [selectedRole, setSelectedRole] = useState(user.role);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };
  const handleUpdateRole = (p) => {
    handleUpdateUser(p,selectedRole);
    onClose(); // Close the modal after updating the role
  };
   
    return (
      <div className="fixed top-0 left-0 w-full  flex items-center justify-center bg-gray-900 bg-opacity-50 h-full" >
        <div className="bg-white p-6 rounded-lg shadow-md text-black " >
        <button onClick={onClose} className="absolute  mt-1 mr-2 text-red-500 focus:outline-none ml-[11.5rem]"><X /></button>
          <h2 className="text-2xl font-bold mb-4">Edit User Role</h2>
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <div className="mt-4">
            <h1>Update role :</h1>
          <select
              value={selectedRoles}
                 onChange={(e) => handleRoleChange( e.target.value)}
                 className="w-[130px] border border-gray-300 bg-white text-black rounded-md px-2 py-1"
               >
                 <option value="">Select Role</option>
                 <option value="admin">Admin</option>
                 <option value="user">User</option>
               </select>
          </div>
          <button onClick={()=>{
            handleUpdateRole(user._id);
          }} className="bg-gray-500 text-white px-3 py-1 rounded mt-4">Update</button>
        </div>
      </div>
    );
  };
  return (
    <div className="container mx-auto p-4 sm:w-[80%] w-[100%]  block h-[100vh] overflow-y-auto mr-20" id='scroll'>
     <div className='flex sm:flex-row flex-col sm:gap-12 gap-1 ml-12 sm:ml-0 items-center '> 
      <div><h2 className="text-2xl font-bold ">User Details</h2></div>
      <div className='flex flex-row gap-1 justify-center items-center'>
        <input type="text" className='w-[200px] h-[34px] p-4 bg-white text-black rounded-md border ' onChange={(e)=>{setSearch(e.target.value)}} value={search}  placeholder='enter name or email' />
        <button className='bg-blue-500 p-[5px] rounded-md text-white' onClick={searchUser}>search</button>
        <button className='bg-yellow-500 p-[5px] rounded-md text-white'  onClick={clearSearch}>clear</button>

      </div>
      <div>

      </div>
     </div>
      <div>
        <ul>
        {(search ? filteredUsers : users).map((user) => (
            <li key={user.id} className="flex items-center sm:flex-row flex-col justify-between border-b py-2">
              <div>

                <p className="text-lg">{user.id} {user.name}</p>
                <p className="text-gray-500">Email: {user.email}</p>
              </div>
              <div>
              
                <button onClick={() => handleEditUser(user)}  className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit Role</button>
                <button  className="bg-red-500 text-white px-3 py-1 rounded" onClick={()=>{
                  deleteUser(user)
                }}>Delete</button>
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
