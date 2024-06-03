import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("themeMode") || "dark",
};

// WareHouse bhitra euta department
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Creating Reducer for toogling theme
    toogleTheme: (state) => {
      // console.log("Theme Toggled");
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("themeMode",state.mode)
    },
  },
});

export const { toogleTheme } = themeSlice.actions;

export default themeSlice.reducer;
