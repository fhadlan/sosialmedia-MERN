import express from "express";

import { createPost, getPost } from "../controller/posts.js";

const router = express.Router();

router.route("/").get(getPost).post(createPost);

export default router;
