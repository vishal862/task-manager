import express from "express";
import {
  createTask,
  getTasks,
  test,
  updateTaskStatus,
} from "../controller/task.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/", createTask);
router.get("/", getTasks);
router.patch("/:id", updateTaskStatus);

export default router;
