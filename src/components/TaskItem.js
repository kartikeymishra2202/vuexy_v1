import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../features/TaskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p className="text-gray-400">{task.description}</p>
      <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
      <div className="mt-4 flex justify-between">
        <button
          className={`px-4 py-2 rounded ${
            task.completed ? "bg-green-600" : "bg-red-600"
          }`}
          onClick={() => dispatch(toggleComplete(task.id))}
        >
          {task.completed ? "Completed" : "Mark as Completed"}
        </button>
        <button
          className="px-4 py-2 bg-yellow-600 rounded"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
