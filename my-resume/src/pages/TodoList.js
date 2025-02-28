import React, { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <Paper sx={{ padding: 3, marginTop: 2 }}>
            <TextField
                label="Нове завдання"
                variant="outlined"
                fullWidth
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <Button variant="contained" sx={{ marginTop: 2 }} onClick={addTask}>
                Додати
            </Button>
            <List sx={{ marginTop: 2 }}>
                {tasks.map((t, index) => (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton edge="end" color="error" onClick={() => deleteTask(index)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={t} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;
