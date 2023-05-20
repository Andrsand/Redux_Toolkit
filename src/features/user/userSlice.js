import { createSlice } from "@reduxjs/toolkit";

const initialState = { // объект состояния
    firstName: '',
    lastName: '',
}

export const userSlice = createSlice({ // редюсер - объект с опциями:
    name: 'user', // опция - имя
    initialState, // опция - первоначальное состояние которое мы создали выше
    reducers: {   // опция - объект функций управляющих нашим состоянием
        setFirstName: (state, action) => { // функция - экшн с параметрами: state - в нашем случае это initialState и action - payload (получение данных из фрмы UI)
            state.firstName = action.payload
        },
    },
})

export const { setFirstName } = userSlice.actions
export default userSlice.reducer