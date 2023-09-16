import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:5000/api/auth/";

const initialState = {
  values: [],
  status: "idle",
  error: null,
};

export const signup = createAsyncThunk("auth/signup", async (postData) => {
  const response = axios.post(apiUrl + "signup", postData);
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.values.push(...action.payload);
    });
  },
});

export default authSlice.reducer;
