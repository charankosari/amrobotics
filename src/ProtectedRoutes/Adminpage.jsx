import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Page</h1>
                <div className="flex flex-col gap-4">
                    <Link to="/adminpanel" className="py-3 px-6 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">Admin Panel</Link>
                    <Link to="/" className="py-3 px-6 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300 ease-in-out">User Panel</Link>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
