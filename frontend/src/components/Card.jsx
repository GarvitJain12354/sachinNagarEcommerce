

import React from "react";
import { useLocation } from "react-router-dom"; 
const Card = ({ title, imgUrl, addToCart, product, price }) => {
  const location = useLocation();
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg w-72 h-[350px] flex flex-col justify-between items-center mx-auto">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-40 object-contain rounded-md"
      />
      <div className="text-center px-2 flex-1">
        <h1 className="text-lg font-semibold mt-3 line-clamp-2">{title}</h1>
        <p className="text-gray-600 text-sm mt-2">Price: ${price}</p>
      </div>
      
     
      {location.pathname === "/home" ? (
        <button
          onClick={() => addToCart(product)}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-md hover:from-indigo-600 hover:to-blue-600 transition duration-300"
        >
          Add to Cart
        </button>
      ) : location.pathname === "/cart" ? (
        <button
          onClick={() => alert('Proceed to Buy Now!')}
          className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-md hover:from-amber-600 hover:to-yellow-600 transition duration-300"
        >
          Buy Now
        </button>
      ) : null}
    </div>
  );
};

export default Card;
