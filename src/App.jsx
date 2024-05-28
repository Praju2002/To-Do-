
// import './App.css'
import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./layout/rootlayout";
import Homepage from './pages/Homepage';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Homepage/>}/>
        <Route path="contact" element={<h1>contact</h1>} />
        <Route path="*" element={<h1>Page not found</h1>} />
        {/* <Route path="dashboard" element={<Dashboard />} />
        <Route path="about" element={<About />} /> */}
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
