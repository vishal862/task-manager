import express from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  test,
  updateTaskStatus,
} from "../controller/task.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/", createTask);
router.get("/", getTasks);
router.patch("/:id", updateTaskStatus);
router.delete("/:id", deleteTask);

export default router;
