import React from 'react'
import { Box, IconButton } from '@mui/material'
import { Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
function TodoItem({handleTodoDelete,handleTodoDone,item}) {
  return (
    <Box sx={{height:"75px",py:"16px",px:"20px", backgroundColor:"primary.dark",borderRadius:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
        <Typography variant='body2' sx={{color:"secondary.main"}}>
            {item.content}
        </Typography>
        <Box>
          {/* callback function banuane  */}
        <IconButton onClick={()=>handleTodoDone (item.id)}>
          <DoneIcon sx={{color:"secondary.main", backgroundColor:"primary.dark"}}/>
        </IconButton>
        <IconButton onClick={()=>handleTodoDelete(item.id)}>
          <DeleteIcon sx={{color:"secondary.main"}}/>
        </IconButton>
        </Box>
    </Box>
  )
}

export default TodoItem;