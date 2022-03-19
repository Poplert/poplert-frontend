import React from "react";

// react-router components
import { Routes, Route, Navigate } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "./assets/theme";

/// import providers fro context
import { MetaMaskContextProvider } from "./common/contexts/metamask";

import { LandingPage } from "./pages/Landing/LandingPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MetaMaskContextProvider>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MetaMaskContextProvider>
    </ThemeProvider>
  );
}
