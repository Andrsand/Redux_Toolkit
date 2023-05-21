import { createSlice } from "@reduxjs/toolkit";

const initialState = { // стейт которым изначально является пустой массив
    todos: [],
}

export const todoSlice = createSlice({ // создаем и экспортируем слайс
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => { },
    },
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer