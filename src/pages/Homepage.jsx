
import React from 'react'//rcfe
import { Box } from '@mui/material'
import TodoMainContainer from '../components/todo_main_container';

function Homepage() {
  // const mode = useSelector((state) => state.theme.mode)
  // console.log("mode", mode);
  return (
    <main style={{ minHeight: "100vh" }}>
      <Box component="section" sx={{ mt:"7rem",display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <TodoMainContainer />
      </Box>
    </main>
  )
}

export default Homepage;