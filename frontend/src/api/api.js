const BASE_URL = "http://localhost:5000/api/tasks";

export const createTask = async (task) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const fetchTasks = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  const res = await fetch(`${BASE_URL}?${query}`);
  return res.json();
};
