export function getPalette(mode) {
    // For Dark Mode
    if (mode === "dark") {
      return {
        primary: {
          main: "#9E78CF",
        },
        secondary: {
          main: "#3E1671",
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
  