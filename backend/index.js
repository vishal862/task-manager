import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import taskRoute from "./routes/task.route.js"


const __dirname = path.resolve();


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks",taskRoute)

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'frontend','dist','index.html'))
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running")))
  .catch((err) => console.error(err));
