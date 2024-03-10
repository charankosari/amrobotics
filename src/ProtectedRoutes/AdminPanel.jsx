import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers,FaBoxOpen  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const AdminPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className='flex items-center justify-center'>
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Panel</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to="/admin/users" className="flex flex-col justify-center items-center py-6 px-8 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                    <FaUsers className="h-12 w-12 mb-2" />
                        <span className="text-xl">Users</span>
                    </Link>
                    <Link to="/admin/products" className="flex flex-col justify-center items-center py-6 px-8 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
                    <FaBoxOpen className="h-12 w-12 mb-2" />
                        <span className="text-xl">Products</span>
                    </Link>
                    <Link to="/admin/orders" className="flex flex-col justify-center items-center py-6 px-8 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out">
                       <FaCartShopping className="h-12 w-12 mb-2" />
                        <span className="text-xl">Orders</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
