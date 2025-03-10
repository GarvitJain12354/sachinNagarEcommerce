


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import { useCartContext } from "../context/cartContext";
import CartIcon from "./CartIcon";

const HomePage = ({ cookies, removeCookies }) => {
  const { setCart, cart } = useCartContext();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await axios.get("https://fakestoreapi.com/products");
        setProducts(productData.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    setCart([]);
    removeCookies("authToken", "");
    navigate("/login");
  };

  const handleCartClick = () => {
    if (!cookies.authToken) {
      alert("Please register or login first to access the cart.");
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md px-10 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
            HomePage
          </h1>
        </Link>

        <div className="flex gap-6 items-center">
          <div onClick={handleCartClick} className="cursor-pointer">
            <div className="relative">
              <CartIcon itemCount={cart.length} />
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Products Section */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              addToCart={() => setCart([...cart, product])}
              imgUrl={product.image}
              price={product.price}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;