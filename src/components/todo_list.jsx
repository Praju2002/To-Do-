import React from 'react'
import axios from 'axios';
import { Box, Typography } from '@mui/material'
import TodoItem from './todo_item'
import { BASE_URL } from '../config/BaseUrl';
function TodoList({ todoList, setTodoList }) {
    const handleTodoDelete = async (id) => {
        // const newList = todoList.filter((item) => item.id !== id);
        // setTodoList(newList);
        try {
            const response = await axios.delete(`${BASE_URL}/todos/${id}`)
            // localStorage.setItem("todoList", JSON.stringify(newList));
            if (response.status === 200) {
                const newList = todoList.filter((item) => item.id !== id);
                setTodoList(newList);
            }

        } catch (err) {
            console.log(err);
        }
    };
    const handleTodoDone = async (id) => {
        // const newList = todoList.map((item) => {
        //     if (item.id === id) {
        //         return { ...item, isDone: true };
        //     }
        //     return item;
        // });
        // setTodoList(newList);
        try {
            const response =await axios.patch(`${BASE_URL}/todos/${id}`, { isDone: true })
            console.log("done res",response);
            if(response.status===200){
                const newList = todoList.map((item) => {
                    if (item.id === id) {
                        return { ...item, isDone: true };
                    }
                    return item;
                });
                setTodoList(newList);
            }
            // localStorage.setItem("todoList", JSON.stringify(newList));
        } catch (err) {
            console.log(err);
        }
    };

    const filteredTodoList = todoList.filter((item) => item.isDone === false);
    return (
        <Box sx={{ width: "100%" }}>
            <Typography sx={{ color: "#fff", fontSize: "16px" }}>Tasks to do - {filteredTodoList.length}</Typography>

            <Box sx={{ mt: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {
                    filteredTodoList?.map((item, index) => (
                        <TodoItem key={item.id}
                            item={item} handleTodoDelete={handleTodoDelete} handleTodoDone={handleTodoDone} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default TodoList;