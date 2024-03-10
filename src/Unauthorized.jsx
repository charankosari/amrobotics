import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-3xl font-bold mb-4 text-red-600">Unauthorized Access</h1>
                <p className="text-lg text-gray-700 mb-4">You are not authorized to access this page.</p>
                <p className="text-gray-700">Please <Link to="/" className="text-green-500 underline">go back</Link> to the homepage.</p>
            </div>
        </div>
    );
};

export default Unauthorized;
