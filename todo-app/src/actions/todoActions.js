export const fetchTodos = () => ({ type: 'FETCH_TODOS_REQUEST' });
export const addTodo = (todo) => ({ type: 'ADD_TODO_REQUEST', payload: todo });
export const deleteTodo = (id) => ({ type: 'DELETE_TODO_REQUEST', payload: id });
export const toggleTodo = (id) => ({ type: 'TOGGLE_TODO_REQUEST', payload: id });
export const editTodo = (id, text) => ({ type: 'EDIT_TODO_REQUEST', payload: { id, text } });
export const clearTodos = () => ({ type: 'CLEAR_TODOS_REQUEST' });
