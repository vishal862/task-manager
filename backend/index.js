const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const taskRoute = require("./routes/task.route");

// ✅ initialize app BEFORE using it
const app = express();

// ✅ resolve __dirname safely
const __dirname = path.resolve();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoute);

// ✅ Serve static frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running")))
  .catch((err) => console.error(err));
