const apiUrl = 'http://localhost:5002/api/todos';

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

async function fetchTodos() {
    const response = await fetch(apiUrl);
    const todos = await response.json();
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        li.style.textDecoration = todo.completed ? 'line-through' : 'none';

        li.addEventListener('click', () => toggleTodo(todo._id, !todo.completed));
        li.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            deleteTodo(todo._id);
        });

        todoList.appendChild(li);
    });
}

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newTodo = { title: todoInput.value };
    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo),
    });
    todoInput.value = '';
    fetchTodos();
});

async function toggleTodo(id, completed) {
    await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed }),
    });
    fetchTodos();
}

async function deleteTodo(id) {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    fetchTodos();
}

fetchTodos();

