const express = require("express");
const {
  createTask,
  deleteTask,
  getTasks,
  test,
  updateTaskStatus,
} = require("../controller/task.controller");


const router = express.Router();

router.get("/test", test);
router.post("/", createTask);
router.get("/", getTasks);
router.patch("/:id", updateTaskStatus);
router.delete("/:id", deleteTask);

export default router;
