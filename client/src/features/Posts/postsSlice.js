import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPosts,
  createPost,
  deletePost,
  likePost,
  fetchPostsSearch,
} from "./postsAPI";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

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
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.data = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.unshift(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (post) => post._id !== action.payload._id
        );
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.data.findIndex(
          (post) => post._id === action.payload._id
        );
        state.data[index].likes = action.payload.likes;
      })
      .addCase(fetchPostsSearch.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPostsSearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      });
  },
});

export default postsSlice.reducer;
