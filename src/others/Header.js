import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center  text-white max-w-full px-2 py-2 rounded-lg bg-gray-700">
      <div className="flex items-center ">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Header;
