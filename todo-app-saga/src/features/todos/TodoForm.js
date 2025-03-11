import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box } from '@mui/material';
import { addTodoRequest, editTodoRequest } from './todoSlice';

function TodoForm({ editTodo = null, onCancelEdit }) {
    const [text, setText] = useState(editTodo ? editTodo.text : '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        if (editTodo) {
            // Режим редактирования
            dispatch(editTodoRequest({ id: editTodo.id, text }));
            onCancelEdit();
        } else {
            // Режим добавления
            dispatch(addTodoRequest(text));
        }
        setText('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2, display: 'flex', gap: 1 }}>
            <TextField
                label={editTodo ? 'Edit Task' : 'New Task'}
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
                variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
                {editTodo ? 'Update' : 'Add'}
            </Button>
            {editTodo && (
                <Button variant="outlined" color="secondary" onClick={onCancelEdit}>
                    Cancel
                </Button>
            )}
        </Box>
    );
}

export default TodoForm;