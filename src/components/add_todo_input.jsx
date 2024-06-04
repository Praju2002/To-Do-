import React from 'react'
import { useState } from 'react';
import { Box, IconButton } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import AddBoxIcon from '@mui/icons-material/AddBox';
function AddTodoInput({ setTodoList , todoList}) {
    const [content, setContent] = useState("")
    const handleinputchange = (event) => (
        setContent(event.target.value)
    )
    const handleClick = () => {
        if (content.trim() !== "") {
            const newItem = {
                // generate random number which acts like a key for item
                id: uuidv4(),
                content: content,
                isDone: false,
            };
            setTodoList((prev) => [newItem, ...prev]);
            try{
                localStorage.setItem("todoList", JSON.stringify([newItem,...todoList]));
            }catch(err){
                console.log(err);
            }
            setContent("");
        }
    }
    return (
        <Box sx={{ display: "flex", alignItems: "center", width: "100%", gap: "1rem" }}>
            <input type='text' className='todo-input' placeholder='Add a new task' value={content} onChange={handleinputchange} onKeyDown={(e) => {
                if (e.key === "enter") {
                    handleClick();
                }
            }} />
            <Box sx={{ width: "2.5rem", height: "2.5rem" }}>
                <IconButton sx={{ padding: "0" }} onClick={handleClick}>
                 <AddBoxIcon sx={{ color: "secondary.main", fontSize: "3.2rem", }} />
                 </IconButton>
            </Box>
        </Box>
        
    )
}

export default AddTodoInput;