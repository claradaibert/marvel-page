import { createSlice } from "@reduxjs/toolkit";

// Define user slice types
interface IThemeState {
  currentTheme: "light" | "dark";
  sideBarOpen: boolean;
}

// Define initial user state
const initialState: IThemeState = {
  currentTheme: "light",
  sideBarOpen: false,
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
    setSidebar: (state, { payload }) => {
      state.sideBarOpen = payload;
    },
  },
});

export default themeSlice.reducer;

export const { switchTheme, setSidebar } = themeSlice.actions;
