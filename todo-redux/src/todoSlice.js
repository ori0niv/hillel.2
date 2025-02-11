import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [], // Масив задач
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
