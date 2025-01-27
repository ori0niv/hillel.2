import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [darkTheme, setDarkTheme] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.body.className = darkTheme ? 'dark' : 'light';
        localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
    }, [darkTheme]);

    return (
        <button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? 'Світла тема' : 'Темна тема'}
        </button>
    );
}

