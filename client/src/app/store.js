import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postsReducer from "../features/Posts/postsSlice";
import authReducer from "../features/Auth/authSlice";

const persistConfig = {
  key: "user",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: persistedAuthReducer,
  },
});
