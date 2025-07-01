import React, { useEffect, useState } from "react";
import { fetchTasks } from "./api/api";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ status: "", assignedTo: "" });

  const loadTasks = async () => {
    const data = await fetchTasks(filters);
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, [filters]);

  const handleTaskUpdate = (updated) => {
    if (updated.deleted) {
      setTasks(tasks.filter((t) => t._id !== updated._id));
    } else {
      setTasks(tasks.map((t) => (t._id === updated._id ? updated : t)));
    }
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Collaborative Task Manager
        </h2>

        <TaskForm onTaskCreated={(newTask) => setTasks([...tasks, newTask])} />

        <FilterBar filters={filters} onFilterChange={setFilters} />

        <TaskList tasks={tasks} onTaskUpdate={handleTaskUpdate} />
      </div>
    </div>
  );
}
