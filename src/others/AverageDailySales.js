import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const AverageDailySales = () => {
  // Line chart data
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [4000, 5000, 7000, 6000, 8500, 12000, 9500],
        backgroundColor: "transparent",
        borderColor: "#10B981",
        pointBackgroundColor: "#10B981",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white shadow-lg">
      <div className="flex flex-col space-y-4">
        {/* Average Daily Sales */}
        <div>
          <h3 className="font-semibold text-lg">Average Daily Sales</h3>
          <p className="text-gray-400 text-sm">Total Sales This Month</p>
          <div className="text-3xl font-bold">$28,450</div>
          <Line data={data} options={options} />
        </div>

        {/* Sales Overview */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Sales Overview</h3>
            <p className="text-green-400 text-sm">+18.2%</p>
          </div>
          <div className="text-2xl font-bold">$42.5k</div>
          <div className="flex justify-between text-sm mt-4">
            <div>
              <p>Order</p>
              <p className="font-bold text-blue-400">62.2%</p>
            </div>
            <div>
              <p>Visits</p>
              <p className="font-bold text-yellow-400">25.5%</p>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "62%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageDailySales;
