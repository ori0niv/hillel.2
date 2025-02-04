import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/todoSlice';

const TodoForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a task"
                style={{ padding: '10px', width: '200px', marginRight: '10px' }}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
