import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

import { createPost, getPost } from "../controller/posts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/assets/"));
  },
  filename: (req, file, cb) => {
    const fileName = req.body.creator + file.originalname;
    req.body.fileName = fileName;
    cb(null, fileName);
  },
});
const upload = multer({ storage });

router.route("/").get(getPost).post(upload.single("selectedFile"), createPost);

export default router;
