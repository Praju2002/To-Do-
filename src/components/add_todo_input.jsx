import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Box, IconButton } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { BASE_URL } from '../config/BaseUrl';
function AddTodoInput({ setTodoList, todoList }) {
    const [content, setContent] = useState("")
    const handleinputchange = (event) => (
        setContent(event.target.value)
    )
    const handleClick = async() => {
        if (content.trim() !== "") {
            const newItem = {
                // generate random number which acts like a key for item
                id: uuidv4(),
                content: content,
                isDone: false,
            };
            
            try {
                const response=await axios.post(`${BASE_URL}/todos`, newItem)
                
                if (response.status === 201) {
                    setTodoList((prev) => [newItem, ...prev]);
                }
                // localStorage.setItem("todoList", JSON.stringify([newItem,...todoList]));
                console.log("new item add",response);
            } catch (err) {
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