import Task from "../model/task.model.js";

export const test = (req, res) => {
  return res.json({ message: "running" });
}; 

export const createTask = async (req, res) => {
  try {
    const { title, description, assignedTo } = req.body;
    if (!title || !description || !assignedTo) {
      return res.status(404).json({ message: "all fields are required" });
    }
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const getTasks = async (req, res) => {
  const { status, assignedTo } = req.query;
  const query = {};

  if (status) query.status = status;
  if (assignedTo) query.assignedTo = assignedTo;
    console.log(query);
    
  try {
    const tasks = await Task.find(query);
    console.log(tasks);
    
    return res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
