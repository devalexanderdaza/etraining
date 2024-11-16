import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fd7f00",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#3a1535",
      dark: "#1b0a1e",
      light: "#4f2a4f",
      contrastText: "#ffffff",
    },
    error: {
      main: "#d32f2f",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#fdec12",
      light: "#feff89",
      dark: "#a37605",
      contrastText: "#001e61",
    },
    success: {
      main: "#52d689",
      light: "#bef4d4",
      dark: "#1b7a43",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f8fafd",
      paper: "#ffffff",
    },
    text: {
      primary: "#3a1535",
      secondary: "#1b0a1e",
    },
  },
});

export { lightTheme };
