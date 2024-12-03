import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../components/TaskList";
import { addTask } from "../features/TaskSlice";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState("all"); // Default filter is "all"
  const [searchQuery, setSearchQuery] = useState("");
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const filteredTasks = tasks
    .filter((task) => {
      const now = new Date();
      const taskDueDate = new Date(task.dueDate);

      switch (filter) {
        case "completed":
          return task.completed;
        case "pending":
          return !task.completed;
        case "overdue":
          return taskDueDate < now && !task.completed;
        default: // "all"
          return true;
      }
    })
    .filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleAddTask = () => {
    if (!newTask.title || !newTask.description || !newTask.dueDate) {
      alert("Please fill out all fields!");
      return;
    }

    const newTaskObject = {
      id: Date.now().toString(),
      ...newTask,
      completed: false,
    };

    dispatch(addTask(newTaskObject));
    setNewTask({ title: "", description: "", dueDate: "" });
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Add Task Form */}
      <div className="mb-6">
        <h2 className="text-white text-lg font-bold mb-2">Add New Task</h2>
        <input
          type="text"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          placeholder="Task Title"
          className="w-full p-2 rounded bg-gray-700 text-white mb-2"
        />
        <textarea
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          placeholder="Task Description"
          className="w-full p-2 rounded bg-gray-700 text-white mb-2"
        />
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          className="w-full p-2 rounded bg-gray-700 text-white mb-2"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks..."
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
        />
        <div className="flex space-x-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded ${
              filter === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            All Tasks
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded ${
              filter === "completed"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Completed Tasks
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded ${
              filter === "pending"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Pending Tasks
          </button>
          <button
            onClick={() => setFilter("overdue")}
            className={`px-4 py-2 rounded ${
              filter === "overdue"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Overdue Tasks
          </button>
        </div>
      </div>

      {/* Task List */}
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default DashboardPage;
