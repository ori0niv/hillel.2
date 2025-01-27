import React, { useState } from 'react';

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setTodos([...todos, input.trim()]);
            setInput('');
        }
    };

    return (
        <div>
            <h1>Головна сторінка</h1>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Додати нове завдання"
                />
                <button type="submit">Додати</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
