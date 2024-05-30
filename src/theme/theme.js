import { createTheme } from "@mui/material/styles";
import { getPalette } from "./palette";

export function themeSettings(mode) {
  return {
    palette: getPalette(mode),
  };
}
// const theme = createTheme({
//   palette: getPalette("light"),
// });

// export default theme;
