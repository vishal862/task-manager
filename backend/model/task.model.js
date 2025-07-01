const  mongoose = ("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    assignedTo: String,
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Done"],
      default: "To Do",
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
