import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:5000/api/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export const fetchPostsSearch = createAsyncThunk(
  "posts/search",
  async ({ searchParams }) => {
    const searchQuery = searchParams.get("searchQuery");
    const tags = searchParams.get("tags");
    const response = await axios.get(
      `${apiUrl}/search?searchQuery=${searchQuery}&tags=${tags}`
    );
    return response.data;
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ([postData, token]) => {
    console.log(postData);
    const response = await axios.post(apiUrl, postData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ([id, token]) => {
    const response = await axios.delete(`${apiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

export const likePost = createAsyncThunk(
  "posts/like",
  async ({ postId, token }) => {
    const response = await axios.patch(
      apiUrl,
      { postId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  }
);
