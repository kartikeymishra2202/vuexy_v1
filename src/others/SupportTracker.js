// import React, { useRef, useEffect } from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

import React from "react";

const SupportTracker = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg w-96 font-sans relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-sm font-medium">Support Tracker</h3>
          <p className="text-xs text-gray-400">Last 7 Days</p>
        </div>
        <div className="text-gray-500 cursor-pointer">...</div>
      </div>

      {/* Tickets */}
      <div className="mb-6">
        <h1 className="text-5xl font-bold">164</h1>
        <p className="text-sm text-gray-400">Total Tickets</p>
      </div>

      {/* Ticket Stats */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-full"></div>
            <p className="text-sm">New Tickets</p>
          </div>
          <p className="text-sm text-gray-400">142</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-purple-600 p-2 rounded-full"></div>
            <p className="text-sm">Open Tickets</p>
          </div>
          <p className="text-sm text-gray-400">28</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-full"></div>
            <p className="text-sm">Response Time</p>
          </div>
          <p className="text-sm text-gray-400">1 Day</p>
        </div>
      </div>

      {/* Circular Progress Bar */}
      <div className="relative flex justify-center items-center mb-6">
        <svg
          className="w-32 h-32 transform -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="none"
            stroke="#2d3748"
            strokeWidth="2.5"
          />
          {/* Dashed Progress */}
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="none"
            stroke="#805ad5"
            strokeWidth="2.5"
            strokeDasharray="85, 100" // Adjust progress here
            strokeDashoffset="0"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-xl font-bold">85%</span>
          <span className="text-sm text-gray-400">Completed Task</span>
        </div>
      </div>

      {/* Buy Now Button */}
      <button className="absolute bottom-6 right-6 bg-red-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-500">
        Buy Now
      </button>
    </div>
  );
};

export default SupportTracker;
