import { createSlice } from "@reduxjs/toolkit";

// Define user slice types
interface IThemeState {
  currentTheme: "light" | "dark";
}

// Define initial user state
const initialState: IThemeState = {
  currentTheme: "light",
};

// Create theme slice
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      if (state.currentTheme === "light") {
        state.currentTheme = "dark";
        return;
      }
      state.currentTheme = "light";
    },
  },
});

export default themeSlice.reducer;

export const { switchTheme } = themeSlice.actions;
