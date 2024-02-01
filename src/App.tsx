import React from "react";
import { ThemeProvider } from "styled-components";

// Theme import
import { lightTheme } from "./styles/themes/light";
import { darkTheme } from "./styles/themes/dark";
import { GlobalStyle } from "./styles/global";

// Page import
import { Auth } from "./pages/Auth";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Auth />
    </ThemeProvider>
  );
}

export default App;
