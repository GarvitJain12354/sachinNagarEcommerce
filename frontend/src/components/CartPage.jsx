

import React from "react";
import Card from "./Card";
import { useCartContext } from "../context/cartContext";
import CheckoutButton from "./CheckOutButton";

const CartPage = ({ cookies }) => {
  const { cart } = useCartContext();
  const cartCount = cart.length;
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto p-6 min-h-screen bg-gray-100">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-xl text-gray-600">Your cart is empty.</p>
          <img src="/empty-cart.png" alt="Empty Cart" className="w-32 mt-4 opacity-60" />
        </div>
      ) : (
        <>
          {/* Cart Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                imgUrl={product.image}
                price={product.price}
                product={product}
              />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <p className="text-lg text-gray-700">Cart Count: <span className="font-bold">{cartCount}</span></p>
            <p className="text-lg text-gray-700">Total Amount: <span className="font-bold">${totalAmount.toFixed(2)}</span></p>

            {/* Checkout Button */}
            <div className="mt-4">
              <CheckoutButton cart={cart} amount={totalAmount} cookies={cookies} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
