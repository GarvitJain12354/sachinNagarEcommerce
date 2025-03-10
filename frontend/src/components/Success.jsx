

import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-900 text-white text-center">
      <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-4xl">
        <h2 className="text-4xl font-medium mb-4 bg-gradient-to-r from-emerald-600 to-emerald-400 text-transparent bg-clip-text">Order Successful!</h2>
        <p className="text-lg mb-6">Thank you for your order.</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-md hover:bg-emerald-700 transition-transform transform hover:scale-105"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default Success;
