import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:5000/api/posts";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    extraReducer(builder) {
      builder
        .addCase(fetchPosts.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.posts = state.posts.concat(action.payload);
        })
        .addCase(fetchPosts.rejected, (state, action) => {
          state.status = "Failed";
          state.error = action.error.message;
        });
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const getPostsStatus = (state) => state.status;

export const {} = postsSlice.actions;
export default postsSlice.reducer;
