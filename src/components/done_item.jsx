import React from 'react'
import { Typography } from '@mui/material'
import { Box, IconButton } from '@mui/material'
function DoneItem({item}) {
  return (
    <Box sx={{height:"75px",py:"16px",px:"20px", backgroundColor:"primary.dark",borderRadius:"1rem",display:"flex",justifyContent:"flex-start",alignItems:"center",width:"100%"}}>
    <Typography variant='body2' sx={{color:"success.main"}}>
       <del> {item.content} </del>
    </Typography>
</Box>
  )
}

export default DoneItem;