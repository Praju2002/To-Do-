import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import AddTodoInput from './add_todo_input';
import TodoList from './todo_list';
import DoneList from './done_list';
function TodoMainContainer() {
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        const fetchTodoListFromLocal = () => {
            try {
                const localtodo = JSON.parse(localStorage.getItem("todoList"));
                setTodoList(localtodo || []);
            } catch (err) {
                setTodoList([]);
                console.log(err);
            }
        }
        fetchTodoListFromLocal();
    }, []);

    return (
        <Box sx={{
            backgroundColor: "primary.main",
            maxWidth: "600px",
            width: "100%",
            px: "75px",
            py: "50px",
            borderRadius: "20px",
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "flex-start",
                height: "100%",
                gap: "3rem"
            }}>
                <AddTodoInput setTodoList={setTodoList} todoList={todoList} />
                <TodoList todoList={todoList} setTodoList={setTodoList} />
                <DoneList todoList={todoList} />

            </Box>
        </Box>
    )
}

export default TodoMainContainer;