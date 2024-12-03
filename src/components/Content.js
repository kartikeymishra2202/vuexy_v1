import React, { useState } from "react";
import TaskModal from "./TaskModal";

const Content = ({ selectedOption, isModalOpen, setIsModalOpen }) => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editData, setEditData] = useState(null);

  // Add a new task
  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); // Remove task by id
  };

  // Toggle task completion
  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Edit a task
  const editTask = (task) => {
    setEditData(task); // Populate the edit data with the task to be edited
    setIsModalOpen(true); // Open the modal
  };

  // Save the edited task
  const handleSaveEdit = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setIsModalOpen(false); // Close the modal after saving
  };

  // Filter tasks based on search query
  const filteredTasks = tasks
    .filter((task) => {
      if (selectedOption === "completed") return task.completed;
      if (selectedOption === "pending") return !task.completed;
      return true;
    })
    .filter((task) => {
      return (
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

  return (
    <div className="flex-1 p-6 bg-gray-900 text-white">
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks..."
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded shadow">
          Total Tasks: {tasks.length}
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">
          Completed: {tasks.filter((task) => task.completed).length}
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">
          Pending: {tasks.filter((task) => !task.completed).length}
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">Overdue: 0</div>
      </div>

      <div className="flex flex-wrap gap-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="w-full sm:w-1/2 bg-gray-800 p-4 rounded shadow"
          >
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-sm text-gray-400">Due: {task.dueDate}</p>
            <div className="flex space-x-2 mt-4">
              <button
                className={`px-4 py-2 rounded ${
                  task.completed ? "bg-red-500" : "bg-green-500"
                }`}
                onClick={() => toggleComplete(task.id)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="px-4 py-2 rounded bg-yellow-500"
                onClick={() => editTask(task)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 rounded bg-red-500"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Task Modal */}
      {isModalOpen && (
        <TaskModal
          setIsModalOpen={setIsModalOpen}
          handleAddTask={handleAddTask}
          taskToEdit={editData} // Pass task data to edit
          handleSaveEdit={handleSaveEdit} // Function to save edited task
        />
      )}
    </div>
  );
};

export default Content;
