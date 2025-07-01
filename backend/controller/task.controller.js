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
//   console.log(query);

  try {
    const tasks = await Task.find(query);
    // console.log(tasks);

    return res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTaskStatus = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    console.log(task);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    
    return res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
