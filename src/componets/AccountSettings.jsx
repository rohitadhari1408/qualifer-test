import React from "react";
import ImageUrl from '../assets/graphic-designer-man_78370-159.avif';

const AccountSettings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-800">Account Settings</h2>

      <div className="flex items-center mt-4">
        <img src={ImageUrl} alt="profile" className="rounded-full w-12 h-12" />
        <div className="ml-3">
          <h3 className="text-lg font-semibold">Marry Doe</h3>
          <p className="text-gray-500">Marry@gmail.com</p>
        </div>
      </div>

      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>
    </div>
  );
};

export default AccountSettings;
