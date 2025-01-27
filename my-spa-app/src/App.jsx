import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts';
import ThemeToggle from './components/ThemeToggle';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
    return (
        <div className="app">
            <header className="header">
                <nav>
                    <NavLink to="/" end>Головна</NavLink>
                    <NavLink to="/about">Про мене</NavLink>
                    <NavLink to="/contacts">Контакти</NavLink>
                </nav>
                <ThemeToggle />
            </header>

            <ErrorBoundary>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </main>
            </ErrorBoundary>
        </div>
    );
}
