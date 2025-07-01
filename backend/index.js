import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import taskRoute from "./routes/task.route.js"
import { fileURLToPath } from "url";
import path from "path";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks",taskRoute)



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running")))
  .catch((err) => console.error(err));
