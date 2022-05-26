import express from "express";

import { getPost, createPost, upDateTask, deleteTask } from "../controllers/tasks.js"

const router = express.Router();

router.get("/", getPost)

router.post("/storePost", createPost)

router.patch("/:id", upDateTask)

router.delete("/:id", deleteTask)


export default router;