import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:5000/api/posts";

const initialState = {
  values: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(apiUrl);
  console.log(response.data);
  return response.data;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData) => {
    const response = await axios.post(apiUrl, postData);
    return response.data;
  }
);

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  const response = await axios.delete(`${apiUrl}/${id}`);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.values.push(...action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "Failed";
        state.values = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.values.unshift(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.values = state.values.filter(
          (post) => post._id !== action.payload._id
        );
      });
  },
});

export const selectAllPosts = (state) => state.posts.values;
export const getPostsStatus = (state) => state.posts.status;

export const {} = postsSlice.actions;
export default postsSlice.reducer;
