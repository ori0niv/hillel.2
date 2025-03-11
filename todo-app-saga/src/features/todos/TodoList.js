import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    List,
    ListItem,
    ListItemText,
    Checkbox,
    IconButton,
    Typography,
    Box,
    Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
    loadTodosRequest,
    deleteTodoRequest,
    toggleTodoRequest,
    clearTodosRequest,
} from './todoSlice';
import TodoForm from './TodoForm';

function TodoList() {
    const dispatch = useDispatch();
    const { items: todos, loading, error } = useSelector((state) => state.todos);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        dispatch(loadTodosRequest());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTodoRequest(id));
    };

    const handleToggle = (id) => {
        dispatch(toggleTodoRequest(id));
    };

    const handleEdit = (todo) => {
        setEditTodo(todo);
    };

    const handleCancelEdit = () => {
        setEditTodo(null);
    };

    const handleClearTodos = () => {
        dispatch(clearTodosRequest());
    };

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">Error: {error}</Typography>;

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                TODO List
            </Typography>

            <TodoForm editTodo={editTodo} onCancelEdit={handleCancelEdit} />

            <List>
                {todos.map((todo) => (
                    <ListItem key={todo.id} dense>
                        <Checkbox
                            checked={todo.completed}
                            onChange={() => handleToggle(todo.id)}
                            color="primary"
                        />
                        <ListItemText
                            primary={todo.text}
                            sx={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                            }}
                        />
                        <IconButton onClick={() => handleEdit(todo)} color="primary">
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(todo.id)} color="secondary">
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>

            {todos.length > 0 && (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClearTodos}
                    sx={{ mt: 2 }}
                >
                    Clear All
                </Button>
            )}
        </Box>
    );
}

export default TodoList;