import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        completed: [],
    },
    reducers: {
        createTodo: (state, action) => {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
            });
        },
        removeTodo: (state, action) => {
            return {...state, todos: state.todos.filter(item => item.id !== action.payload)};
        },
        createCompleted: (state, action) => {
            state.completed.push({
                id: new Date().toISOString(),
                text: action.payload,
            });
        },
        removeCompleted: (state, action) => {
            return {...state, completed: state.completed.filter(item => item.id !== action.payload)};
        },
    },
});

export const { createTodo, removeTodo, createCompleted, removeCompleted } = todoSlice.actions;

export default todoSlice.reducer;