import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        loadTodosRequest(state) {
            state.loading = true;
            state.error = null;
        },
        loadTodosSuccess(state, action) {
            state.items = action.payload;
            state.loading = false;
        },
        loadTodosFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        addTodoRequest(state) {
            state.loading = true;
            state.error = null;
        },
        addTodoSuccess(state, action) {
            state.items.push(action.payload);
            state.loading = false;
        },
        addTodoFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        deleteTodoRequest(state) {
            state.loading = true;
            state.error = null;
        },
        deleteTodoSuccess(state, action) {
            state.items = state.items.filter((todo) => todo.id !== action.payload);
            state.loading = false;
        },
        deleteTodoFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        toggleTodoRequest(state) {
            state.loading = true;
            state.error = null;
        },
        toggleTodoSuccess(state, action) {
            const todo = state.items.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
            state.loading = false;
        },
        toggleTodoFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        editTodoRequest(state) {
            state.loading = true;
            state.error = null;
        },
        editTodoSuccess(state, action) {
            const { id, text } = action.payload;
            const todo = state.items.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
            state.loading = false;
        },
        editTodoFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        clearTodosRequest(state) {
            state.loading = true;
            state.error = null;
        },
        clearTodosSuccess(state) {
            state.items = [];
            state.loading = false;
        },
        clearTodosFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    loadTodosRequest,
    loadTodosSuccess,
    loadTodosFailure,
    addTodoRequest,
    addTodoSuccess,
    addTodoFailure,
    deleteTodoRequest,
    deleteTodoSuccess,
    deleteTodoFailure,
    toggleTodoRequest,
    toggleTodoSuccess,
    toggleTodoFailure,
    editTodoRequest,
    editTodoSuccess,
    editTodoFailure,
    clearTodosRequest,
    clearTodosSuccess,
    clearTodosFailure,
} = todoSlice.actions;

export default todoSlice.reducer;