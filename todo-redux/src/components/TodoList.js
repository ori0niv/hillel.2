import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.items);

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
            <p>Загальна кількість завдань: {todos.length}</p>
        </div>
    );
};

export default TodoList;
