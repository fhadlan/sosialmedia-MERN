import "express-async-errors";
import PostMessage from "../models/postMessage.js";

export const getPost = async (req, res) => {
  const postMessages = await PostMessage.find();
  res.status(200).json(postMessages);
};

export const createPost = (req, res) => {
  const post = req.body;
  res.send("OK post");
};
