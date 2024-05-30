import { Typography } from '@mui/material'
import React from 'react'//rcfe
import { useSelector } from 'react-redux'
function Homepage() {
  const mode = useSelector((state) => state.theme.mode)
  console.log("mode", mode);
  return (
    <main>
      <Typography sx={{ color: "success.main" }}>
        check
      </Typography>
    </main>
  )
}

export default Homepage