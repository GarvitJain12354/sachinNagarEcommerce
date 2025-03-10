import React from 'react';
import { Link } from 'react-router-dom';

const CancelPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-200 to-yellow-600 text-white text-center">
      <div className="  p-8 rounded-lg  max-w-xl">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-rose-600 text-transparent bg-clip-text">Payment Canceled </h2>
        <p className="text-xl text-white mb-6">Your payment has been canceled. Please return to the home page to continue shopping.</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-rose-700 transition-transform transform hover:scale-105"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default CancelPage;
