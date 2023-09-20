import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// CONTROLLER IMPORT
import {
  createPost,
  deletePost,
  getPost,
  likePost,
  updatePost,
} from "../controller/posts.js";

// SETUP ROUTER & STORAGE
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

// ROUTES
router
  .route("/")
  .get(getPost)
  .post(upload.single("selectedFile"), createPost)
  .patch(likePost);
router.route("/:id").patch(updatePost).delete(deletePost);

export default router;
