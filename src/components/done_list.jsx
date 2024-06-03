import React from 'react'
import { Box, Typography } from '@mui/material'
import DoneItem from './done_item'
function DoneList({ todoList }) {
  const DoneList = todoList.filter((item) => item.isDone === true);
  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ color: "#fff", fontSize: "16px" }}>Done-{DoneList.length}</Typography>

      <Box sx={{ mt: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {DoneList?.map((item) => (
          <DoneItem key={item.id} item={item} />
        ))}

      </Box>
    </Box>
  )
}

export default DoneList;