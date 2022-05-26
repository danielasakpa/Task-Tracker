import express from "express";

import { getPost, createPost } from "../controllers/tasks.js"

const router = express.Router();

router.get("/", getPost)

router.post("/", createPost)

export default router;