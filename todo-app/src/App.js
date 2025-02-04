import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';

const App = () => {
  return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
        <Footer />
      </div>
  );
};

export default App;
