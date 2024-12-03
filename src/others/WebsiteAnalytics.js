import React from "react";

const WebsiteAnalytics = () => {
  return (
    <div className="bg-purple-600 rounded-lg p-6 text-white shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Website Analytics</h3>
        <p className="text-sm text-purple-200">Total 28.5% Conversion Rate</p>
      </div>
      <div className="flex items-center justify-between">
        {/* Placeholder for the 3D Image */}
        <div className="w-20 h-20 rounded-full bg-purple-800 flex items-center justify-center">
          <img
            src="https://via.placeholder.com/80" // Placeholder for image
            alt="3D Graphic"
            className="rounded-full"
          />
        </div>
        {/* Metrics */}
        <div>
          <div className="text-sm">
            <p>12h Spend</p>
            <p>127 Orders</p>
          </div>
          <div className="text-sm mt-2">
            <p>18 Order Size</p>
            <p>2.3k Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteAnalytics;
