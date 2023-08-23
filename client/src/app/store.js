import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/Posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
