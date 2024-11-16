import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fd7f00", // Igual al tema claro para consistencia
      contrastText: "#ffffff",
      dark: "#a37605",
      light: "#feff89",
    },
    secondary: {
      main: "#3a1535", // Igual al tema claro
      dark: "#1b0a1e",
      light: "#4f2a4f",
      contrastText: "#ffffff",
    },
    error: {
      main: "#d32f2f",
      contrastText: "#eef7ff",
    },
    warning: {
      main: "#fdec12",
      light: "#feff89",
      dark: "#a37605",
      contrastText: "#0c1317",
    },
    success: {
      main: "#52d689",
      light: "#bef4d4",
      dark: "#1b7a43",
      contrastText: "#ffffff",
    },
    background: {
      default: "#0c1317",
      paper: "#1a252c", // Mayor contraste que el fondo
    },
    text: {
      primary: "#f3f8f8",
      secondary: "#93c1cd",
    },
  },
});

export { darkTheme };
