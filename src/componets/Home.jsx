import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800">Welcome to PopX</h2>
      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <button onClick={() => navigate("/signup")} className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">
        Create Account
      </button>
      <button onClick={() => navigate("/signin")} className="mt-2 w-full bg-purple-200 text-purple-700 py-2 rounded-lg">
        Already Registered? Login
      </button>
    </div>
  );
};

export default Home;
