import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map((todo) => (
                <li key={todo.id} style={{ padding: '5px 0' }}>{todo.text}</li>
            ))}
        </ul>
    );
};

export default TodoList;
