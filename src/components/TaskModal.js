import React, { useState, useEffect } from "react";

const TaskModal = ({
  setIsModalOpen,
  handleAddTask,
  taskToEdit,
  handleSaveEdit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
      setCompleted(taskToEdit.completed);
    }
  }, [taskToEdit]);

  const handleSubmit = () => {
    if (taskToEdit) {
      handleSaveEdit({ ...taskToEdit, title, description, dueDate, completed });
    } else {
      handleAddTask({
        id: Date.now(), // Using timestamp as unique ID
        title,
        description,
        dueDate,
        completed,
      });
    }
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-lg font-semibold mb-4">
          {taskToEdit ? "Edit Task" : "Add Task"}
        </h3>
        <input
          type="text"
          className="w-full p-2 mb-2 border border-gray-300 rounded text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          className="w-full p-2 mb-2 border border-gray-300 rounded text-black"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="date"
          className="w-full p-2 mb-2 border border-gray-300 rounded text-black"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <div className="flex space-x-2 mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSubmit}
          >
            {taskToEdit ? "Save" : "Add"}
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
