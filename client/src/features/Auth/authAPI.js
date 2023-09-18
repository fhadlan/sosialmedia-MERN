import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:5000/api/auth/";

export const signup = createAsyncThunk("auth/signup", async (postData) => {
  const response = axios.post(apiUrl + "signup", postData);
  return response;
});

export const signin = createAsyncThunk("auth/signin", async (postData) => {
  const response = axios.post(apiUrl + "signin", postData);
  return response;
});
