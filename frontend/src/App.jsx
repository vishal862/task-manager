import React, { useEffect, useState } from "react";
import { fetchTasks } from "./api/api";
import TaskForm from "./components/TaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  
  const [filters, setFilters] = useState({ status: "", assignedTo: "" });

  const loadTasks = async () => {
    const data = await fetchTasks(filters);
    setTasks(data);
  };
  useEffect(() => {
    loadTasks();
  }, [filters]);

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm onTaskCreated={(newTask) => setTasks([...tasks, newTask])} />
    </div>
  );
}
