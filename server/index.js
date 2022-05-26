import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import mongoose from  "mongoose";
import router from "./routes/tasks.js"


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({ origin: true }));

const COMMECTION_URL = "mongodb+srv://asakpa22:daniell304@blogcluster.rk7lv.mongodb.net/?retryWrites=true&w=majority"

const port = process.env.PORT || 5000;


mongoose
	.connect(COMMECTION_URL, { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use("/tasks", router)

		app.listen(port, () => {
			console.log("Server has started!")
		})
	})