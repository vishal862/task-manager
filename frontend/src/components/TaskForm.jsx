import React, { useState } from "react";
import { createTask } from "../api/api";

export default function TaskForm({ onTaskCreated }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
    status: "To Do",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = await createTask(task);
    onTaskCreated(newTask);
    setTask({ title: "", description: "", assignedTo: "", status: "To Do" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 sm:p-8 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-2">
          Create New Task
        </h2>

        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Title"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          placeholder="Description"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          value={task.assignedTo}
          onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
          placeholder="Assigned To"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
        >
          <option className="cursor-pointer">To Do</option>
          <option className="cursor-pointer">In Progress</option>
          <option className="cursor-pointer">Done</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition cursor-pointer"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
