import React from "react";

export default function FilterBar({ filters, onFilterChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-6 px-4">
      <select
        value={filters.status}
        onChange={(e) =>
          onFilterChange({ ...filters, status: e.target.value })
        }
        className="w-full sm:w-60 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">All Statuses</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <input
        type="text"
        placeholder="Filter by Assignee"
        value={filters.assignedTo}
        onChange={(e) =>
          onFilterChange({ ...filters, assignedTo: e.target.value })
        }
        className="w-full sm:w-60 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
