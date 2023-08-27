import "express-async-errors";
import PostMessage from "../models/postMessage.js";

export const getPost = async (req, res) => {
  const postMessages = await PostMessage.find().sort({ createdAt: -1 });
  res.status(200).json(postMessages);
};

export const createPost = async (req, res) => {
  const newPost = await PostMessage.create(req.body);
  res.status(201).json(newPost);
};
