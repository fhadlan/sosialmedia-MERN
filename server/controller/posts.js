import "express-async-errors";
import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getPost = async (req, res) => {
  const postMessages = await PostMessage.find().sort({ createdAt: -1 });
  res.status(200).json(postMessages);
};

export const createPost = async (req, res) => {
  const newPost = await PostMessage.create(req.body);
  res.status(201).json(newPost);
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ error: "Id tidak valid" });

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  return res.status(200).json(updatedPost);
};
