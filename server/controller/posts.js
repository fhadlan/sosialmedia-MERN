import "express-async-errors";
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
import path from "path";
import { fileURLToPath } from "url";
import { unlink } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getPost = async (req, res) => {
  const postMessages = await PostMessage.find()
    .populate("userId", "firstName lastName")
    .sort({ createdAt: "desc" });
  res.status(200).json(postMessages);
};

export const getPostSearch = async (req, res) => {
  const { searchQuery, tags } = req.query;
  const title = new RegExp(searchQuery, "i");
  const postMessages = await PostMessage.find({
    $or: [{ title }, { tags: { $in: tags.split("-") } }],
  })
    .populate("userId", "firstName lastName")
    .sort({ createdAt: "desc" });
  res.status(200).json(postMessages);
};

export const createPost = async (req, res) => {
  const userId = req.userId;
  const { title, message, tags, fileName, likes } = req.body;
  const newPost = await PostMessage.create({
    title,
    message,
    userId,
    tags: tags.split(","),
    fileName,
    likes,
  });
  res.status(201).json(await newPost.populate("userId", "firstName lastName"));
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

export const likePost = async (req, res) => {
  const userId = req.userId;
  const { postId } = req.body;
  const post = await PostMessage.findById(postId);
  const isLiked = post.likes.findIndex((id) => id === userId);
  if (isLiked === -1) {
    post.likes.push(userId);
  } else {
    post.likes = post.likes.filter((id) => id !== userId);
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(postId, post, {
    new: true,
  });
  res.status(200).json({ _id: updatedPost._id, likes: updatedPost.likes });
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ error: "Post tidak valid" });
  const deletedPost = await PostMessage.findByIdAndDelete(_id);
  await unlink(
    path.join(__dirname, `../public/assets/${deletedPost.fileName}`),
    (err) => {}
  );
  return res.status(200).json(deletedPost);
};
