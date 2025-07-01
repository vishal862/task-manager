const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const taskRoute = require("./routes/task.route");

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/tasks", taskRoute);

// Serve static frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log("Server running")
    )
  )
  .catch((err) => console.error(err));
