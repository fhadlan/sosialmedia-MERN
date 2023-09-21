import { createSlice } from "@reduxjs/toolkit";
import { signup, signin } from "./authAPI";

const initialState = {
  data: { _id: null },
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
      state.data = { _id: null };
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(signin.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(signin.rejected, (state, action) => {
        state.status = "succeeded";
      });
  },
});

export const { signout } = authSlice.actions;
export default authSlice.reducer;
