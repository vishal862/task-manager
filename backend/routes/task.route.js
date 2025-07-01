import express from "express";
import { createTask, test } from "../controller/task.controller.js";

const router = express.Router();

router.get("/test", test)
router.post("/", createTask);

export default router