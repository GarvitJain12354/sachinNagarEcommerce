
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setCookies }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      setCookies("authToken", res.data.token);
      navigate("/home");
    } catch (error) {
      setError("Invalid username or password. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>

        

        {/* Username Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {error && (
          <div className="mb-4 text-red-500 text-sm ">
            <p>{error}</p>
          </div>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-2 mt-4 text-white font-semibold rounded-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 transition-all duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
