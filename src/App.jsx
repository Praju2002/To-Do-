
import './App.css'
import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./layout/rootlayout";
import Homepage from './pages/Homepage';
import { useSelector } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { themeSettings } from "./theme/theme";

function App() {

  const mode = useSelector((state) => state.theme.mode);
  const theme = createTheme(themeSettings(mode));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Homepage />} />
        <Route path="contact" element={<h1>contact</h1>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
