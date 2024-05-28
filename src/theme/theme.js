import { createTheme } from "@mui/material/styles";
import { getPalette } from "./palette";

const theme = createTheme({
  palette: getPalette("light"),
});

export default theme;
