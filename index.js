// Отримуємо елементи
const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todosWrapper.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = `todo-item ${todo.completed ? 'todo-item--checked' : ''}`;

        todoItem.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} data-index="${index}" class="todo-checkbox">
            <span class="todo-item__description">${todo.text}</span>
            <button class="todo-item__delete" data-index="${index}">Видалити</button>
        `;
        todosWrapper.appendChild(todoItem);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = { text: input.value, completed: false };
    todos.push(newTodo);
    input.value = '';
    updateLocalStorage();
    renderTodos();
});

todosWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('todo-item__delete')) {
        const index = e.target.dataset.index;
        todos.splice(index, 1);
        updateLocalStorage();
        renderTodos();
    }
});

todosWrapper.addEventListener('change', (e) => {
    if (e.target.classList.contains('todo-checkbox')) {
        const index = e.target.dataset.index;
        todos[index].completed = e.target.checked;
        updateLocalStorage();
        renderTodos();
    }
});

function updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

renderTodos();
