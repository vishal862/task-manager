const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const taskRoute = require("./routes/task.route");
const path = require("path");



const path = require("path");
const __dirname = path.resolve();


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
