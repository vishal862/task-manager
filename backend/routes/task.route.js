import express from "express";
import { createTask, getTasks, test } from "../controller/task.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/", createTask);
router.get("/", getTasks);

export default router;
