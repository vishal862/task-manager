import React from "react";
import { deleteTask, updateStatus } from "../api/api";

export default function TaskList({ tasks, onTaskUpdate }) {
  const handleStatusChange = async (id, newStatus) => {
    const updated = await updateStatus(id, newStatus);
    onTaskUpdate(updated);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    onTaskUpdate({ _id: id, deleted: true });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mb-10">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Task List
      </h3>

      {tasks.length === 0 && (
        <p className="text-center text-gray-500">No tasks found.</p>
      )}

      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-white shadow-md rounded-lg p-5 mb-4 border border-gray-200 flex flex-col justify-center items-center"
        >
          <h4 className="text-lg font-bold text-blue-700 mb-1">{task.title}</h4>
          <p className="text-gray-700 mb-1">{task.description}</p>
          <p className="text-sm text-gray-600">
            <strong>Assigned To:</strong> {task.assignedTo}
          </p>
          <p className="text-sm text-gray-600 mb-3">
            <strong>Status:</strong> {task.status}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task._id, e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-48 cursor-pointer"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>

            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition w-full sm:w-auto cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
