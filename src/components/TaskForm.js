import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../features/TaskSlice";

const TaskModal = ({ isOpen, onClose, taskToEdit }) => {
  const [formData, setFormData] = useState(
    taskToEdit || { title: "", description: "", dueDate: "" }
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      dispatch(editTask({ id: taskToEdit.id, updates: formData }));
    } else {
      const newTask = { ...formData, id: Date.now(), completed: false };
      dispatch(addTask(newTask));
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {taskToEdit ? "Edit Task" : "Add Task"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Task Title"
              className="w-full p-2 border rounded text-black "
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Task Description"
              className="w-full p-2 border rounded text-black"
            />
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              {taskToEdit ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>
        <button
          className="mt-4 w-full bg-gray-300 py-2 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskModal;
