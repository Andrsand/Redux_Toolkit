import { createSlice } from "@reduxjs/toolkit";

const initialState = { // объект состояния
    firstName: '',
    lastName: '',
}

export const userSlice = createSlice({ // объект с опциями:
    name: 'user', // опция - имя
    initialState, // опция - первоначальное состояние которое мы создали выше
    reducers: {   // опция - объект функций управляющих нашим состоянием

    }
})