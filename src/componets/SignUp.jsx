import React from "react";

const SignUp = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800">Create your PopX account</h2>

      <div className="mt-4">
        <label className="block text-gray-700 font-medium">Full Name*</label>
        <input type="text" className="w-full p-2 border rounded-lg mt-1" placeholder="Enter full name" />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 font-medium">Phone Number*</label>
        <input type="text" className="w-full p-2 border rounded-lg mt-1" placeholder="Enter phone number" />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 font-medium">Email Address*</label>
        <input type="email" className="w-full p-2 border rounded-lg mt-1" placeholder="Enter email address" />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 font-medium">Password*</label>
        <input type="password" className="w-full p-2 border rounded-lg mt-1" placeholder="Enter password" />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 font-medium">Company Name</label>
        <input type="text" className="w-full p-2 border rounded-lg mt-1" placeholder="Enter company name" />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 font-medium">Are you an Agency?*</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input type="radio" name="agency" className="mr-2" /> Yes
          </label>
          <label className="flex items-center">
            <input type="radio" name="agency" className="mr-2" /> No
          </label>
        </div>
      </div>

      <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">Create Account</button>
    </div>
  );
};

export default SignUp;
