import { createSlice } from "@reduxjs/toolkit";

const initialState = { // стейт которым изначально является пустой массив
    todos: [],
}

export const todoSlice = createSlice({ // создаем и экспортируем слайс
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {       // в массив todos добавляются данные из формы
            state.todos.push(action.payload)
        },
    },
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer