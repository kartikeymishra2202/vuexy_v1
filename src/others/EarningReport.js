import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EarningReports = () => {
  const data = {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    datasets: [
      {
        label: "Earnings",
        data: [100, 200, 150, 300, 400, 250, 320],
        backgroundColor: "#6366F1",
        borderRadius: 4,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#374151" } },
    },
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg">Earning Reports</h3>
          <p className="text-gray-400 text-sm">Weekly Earnings Overview</p>
        </div>
        <button className="text-gray-400">•••</button>
      </div>
      <div className="my-4 text-4xl font-bold">
        $468 <span className="text-green-500 text-sm">+4.2%</span>
      </div>
      <p className="text-gray-400 text-sm">
        You informed of this week compared to last week
      </p>
      <Bar data={data} options={options} />
      <div className="flex justify-between mt-4 text-sm">
        <div>
          <p>Earnings</p>
          <p className="font-bold text-purple-400">$545.69</p>
        </div>
        <div>
          <p>Profit</p>
          <p className="font-bold text-green-400">$256.34</p>
        </div>
        <div>
          <p>Expense</p>
          <p className="font-bold text-red-400">$74.19</p>
        </div>
      </div>
    </div>
  );
};

export default EarningReports;
