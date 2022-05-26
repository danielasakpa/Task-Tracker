import express from "express";
import bodyParser from "body-parser";
import mongoose from  "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import tasksRouter from "./routes/tasks.js"

dotenv.config();

const app = express();

app.use('/tasks', tasksRouter);

app.use(bodyParser.json({"limit": "30mb", extended: true}));
app.use(bodyParser.urlencoded({"limit": "30mb", extended: true}));
app.use(cors());


const COMMECTION_URL = "mongodb+srv://asakpa22:daniell304@blogcluster.rk7lv.mongodb.net/?retryWrites=true&w=majority"

const port = process.env.PORT || 5000;

mongoose.connect(COMMECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(port, () => console.log("sever is running at port 5000")))
  .catch((error) => console.log(error.message));
