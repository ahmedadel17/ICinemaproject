import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  asideBar: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAsideBar: (state) => {
      state.asideBar = !state.asideBar;
    }
  }
})

export const { setAsideBar } = appSlice.actions;
export default appSlice.reducer;