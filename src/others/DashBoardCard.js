import React, { useState, useEffect } from "react";

const DashboardCard = ({ title, value, description }) => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setFetchedData({
      title: "Total Sales",
      value: "$100,000",
      description: "Total revenue this month",
    });
  }, []);

  if (!fetchedData) return <div>Loading...</div>;

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full sm:w-72 mb-6">
      <h3 className="text-lg font-semibold">{fetchedData.title}</h3>
      <p className="text-3xl font-bold my-2">{fetchedData.value}</p>
      <p className="text-sm">{fetchedData.description}</p>
    </div>
  );
};

export default DashboardCard;
