import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoSlice";

const TodoForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        dispatch(addTodo({ id: Date.now(), text }));
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Введіть завдання..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Додати</button>
        </form>
    );
};

export default TodoForm;
