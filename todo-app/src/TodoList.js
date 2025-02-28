import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    clearTodos,
} from "./todoSlice";
import {
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.items);
    const loading = useSelector((state) => state.todos.loading);
    const [task, setTask] = useState("");
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTodo({ id: Date.now(), text: task, completed: false }));
            setTask("");
        }
    };

    const handleEditTask = (id, text) => {
        setEditing(id);
        setTask(text);
    };

    const handleSaveEdit = () => {
        dispatch(editTodo({ id: editing, text: task }));
        setEditing(null);
        setTask("");
    };

    return (
        <div style={{ padding: 20, maxWidth: 400, margin: "auto" }}>
            <h2>TODO List</h2>
            <TextField
                label="Нове завдання"
                variant="outlined"
                fullWidth
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <Button
                variant="contained"
                onClick={editing ? handleSaveEdit : handleAddTask}
                sx={{ mt: 2 }}
            >
                {editing ? "Зберегти" : "Додати"}
            </Button>

            {loading && <p>Завантаження...</p>}

            <List>
                {todos.map((todo) => (
                    <ListItem key={todo.id}>
                        <Checkbox
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        <ListItemText
                            primary={todo.text}
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}
                        />
                        <IconButton onClick={() => handleEditTask(todo.id, todo.text)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => dispatch(deleteTodo(todo.id))}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>

            <Button
                variant="outlined"
                color="error"
                onClick={() => dispatch(clearTodos())}
            >
                Очистити все
            </Button>
        </div>
    );
};

export default TodoList;
