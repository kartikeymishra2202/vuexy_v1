import React from "react";

const Sidebar = ({ selectedOption, setSelectedOption, setIsModalOpen }) => {
  const handleOptionClick = (option) => {
    if (option === "addTask") {
      setIsModalOpen(true); // Open modal for adding tasks
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col items-center py-6">
      <h1 className="text-xl font-bold mb-8">Task Dashboard</h1>
      <button
        onClick={() => handleOptionClick("addTask")}
        className="w-1/2 px-4 py-2 mb-4 bg-blue-500 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
      <button
        onClick={() => handleOptionClick("all")}
        className={`w-1/2 px-4 py-2 mb-4 rounded ${
          selectedOption === "all"
            ? "bg-blue-500"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        All Tasks
      </button>
      <button
        onClick={() => handleOptionClick("completed")}
        className={`w-1/2 px-4 py-2 mb-4 rounded ${
          selectedOption === "completed"
            ? "bg-blue-500"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        Completed Tasks
      </button>
      <button
        onClick={() => handleOptionClick("pending")}
        className={`w-1/2 px-4 py-2 mb-4 rounded ${
          selectedOption === "pending"
            ? "bg-blue-500"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        Pending Tasks
      </button>
    </div>
  );
};

export default Sidebar;
