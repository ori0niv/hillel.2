import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
    const totalTodos = useSelector((state) => state.todos.length);

    return (
        <footer style={{ marginTop: '20px', fontWeight: 'bold' }}>
            Total tasks: {totalTodos}
        </footer>
    );
};

export default Footer;
