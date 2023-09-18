import { createSlice } from "@reduxjs/toolkit";
import { signup, signin } from "./authAPI";

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
      state.data = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      });
  },
});

export const { signout } = authSlice.actions;
export default authSlice.reducer;
