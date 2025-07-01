import Task from "../model/task.model.js";

export const test = (req,res) =>{
    return res.json({message : "running"})
}
export const createTask = async (req, res) => {
  try {
    const {title, description, assignedTo} = req.body;
    if(!title || !description || !assignedTo){
        return res.status(404).json({message : "all fields are required"})
    }
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
