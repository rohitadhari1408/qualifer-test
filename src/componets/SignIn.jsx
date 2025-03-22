import React from "react";

const SignIn = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800">Sign in to your PopX account</h2>
      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="mt-4">
        <label className="block text-gray-700 font-medium">Email Address</label>
        <input type="email" className="w-full p-2 border rounded-lg mt-1" placeholder="Enter email address" />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 font-medium">Password</label>
        <input type="password" className="w-full p-2 border rounded-lg mt-1" placeholder="Enter password" />
      </div>

      <button className="mt-4 w-full bg-gray-400 text-white py-2 rounded-lg">Login</button>
    </div>
  );
};

export default SignIn;
