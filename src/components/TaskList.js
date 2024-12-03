import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleCompleteTask,
  deleteTask,
  updateTask,
} from "../features/TaskSlice.js";

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null); // Track the task being edited
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleEdit = (task) => {
    setIsEditing(task.id);
    setEditData({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
    });
  };

  const handleSave = () => {
    dispatch(updateTask({ id: isEditing, ...editData }));
    setIsEditing(null);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 bg-gray-800 rounded-lg mb-4 flex justify-between items-center"
        >
          {isEditing === task.id ? (
            <div>
              <input
                type="text"
                value={editData.title}
                onChange={(e) =>
                  setEditData({ ...editData, title: e.target.value })
                }
                placeholder="Title"
                className="mb-2 p-1 rounded"
              />
              <textarea
                value={editData.description}
                onChange={(e) =>
                  setEditData({ ...editData, description: e.target.value })
                }
                placeholder="Description"
                className="mb-2 p-1 rounded"
              />
              <input
                type="date"
                value={editData.dueDate}
                onChange={(e) =>
                  setEditData({ ...editData, dueDate: e.target.value })
                }
                className="mb-2 p-1 rounded"
              />
              <button
                className="bg-blue-500 px-2 py-1 rounded mr-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-500 px-2 py-1 rounded"
                onClick={() => setIsEditing(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold text-white">{task.title}</h3>
              <p className="text-sm text-gray-400">{task.description}</p>
              <p className="text-xs text-gray-500">{task.dueDate}</p>
            </div>
          )}

          <div className="flex space-x-2">
            <button
              className="bg-green-500 px-2 py-1 rounded"
              onClick={() => dispatch(toggleCompleteTask(task.id))}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              className="bg-yellow-500 px-2 py-1 rounded"
              onClick={() => handleEdit(task)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 px-2 py-1 rounded"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
