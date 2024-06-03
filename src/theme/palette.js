import { dark } from "@mui/material/styles/createPalette";

export function getPalette(mode) {
  // For Dark Mode
  if (mode === "dark") {
    return {
      primary: {
        main: "#1D1825",
        dark:"#15101C"
      },
      secondary: {
        main: "#9E78CF",
      },
      success: {
        main: "#78CFB0",
      },
      background: {
        default: "#0D0714",
      },
    };
  }

  // For Light Mode
  return {
    primary: {
      main: "#6B3EA6",
      dark:"#4E2C7E"
    },
    secondary: {
      main: "#3E1671",
    },
    success: {
      main: "#4A9F7E",
    },
    background: {
      default: "#f1f1f1",
    },
  };
}
