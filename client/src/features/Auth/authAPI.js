import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:5000/api/auth/";

export const signup = createAsyncThunk("auth/signup", async (postData) => {
  const response = await axios.post(apiUrl + "signup", postData);
  return response.data;
});

export const signin = createAsyncThunk("auth/signin", async (postData) => {
  const response = await axios.post(apiUrl + "signin", postData);
  return response.data;
});
