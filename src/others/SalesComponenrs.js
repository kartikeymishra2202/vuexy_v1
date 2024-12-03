const SalesOverview = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg w-80 font-sans relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium">Sales Overview</h3>
        <span className="text-green-400 text-xs font-semibold">+18.2%</span>
      </div>

      {/* Sales Amount */}
      <h1 className="text-4xl font-bold mb-6">$42.5k</h1>

      {/* Stats */}
      <div className="flex items-center justify-between mb-4">
        {/* Order */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 p-2 rounded-full mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18M3 7h18M3 12h18M3 17h18M3 21h18"
              />
            </svg>
          </div>
          <p className="text-sm">Order</p>
          <p className="text-sm font-bold">
            62.2% <span className="text-xs text-gray-400">6,440</span>
          </p>
        </div>

        {/* Divider */}
        <div className="text-gray-400 text-sm font-semibold">VS</div>

        {/* Visits */}
        <div className="flex flex-col items-center">
          <div className="bg-purple-600 p-2 rounded-full mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75 4.365-9.75 9.75-9.75z"
              />
            </svg>
          </div>
          <p className="text-sm">Visits</p>
          <p className="text-sm font-bold">
            25.5% <span className="text-xs text-gray-400">12,749</span>
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-gray-600 rounded-full">
        <div
          className="absolute h-full bg-blue-500 rounded-full"
          style={{ width: "62%" }}
        ></div>
        <div
          className="absolute h-full bg-purple-500 rounded-full"
          style={{ left: "62%", width: "25%" }}
        ></div>
      </div>

      {/* Settings Icon */}
      <div className="absolute top-4 right-4 bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75v10.5m-5.25-5.25h10.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default SalesOverview;
