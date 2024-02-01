import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";

// Theme import
import { lightTheme } from "./styles/themes/light";
import { darkTheme } from "./styles/themes/dark";
import { GlobalStyle } from "./styles/global";

// Util import
import { toastConfig } from "./utils/ToastConfig";

// Page router import
import { router } from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <ToastContainer {...toastConfig} />
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
