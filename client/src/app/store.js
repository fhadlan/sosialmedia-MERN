import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/Posts/postsSlice";
import authReducer from "../features/Auth/authSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
});
