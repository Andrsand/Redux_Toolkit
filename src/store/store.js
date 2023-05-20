import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";

export const store = configureStore({ // компонент store
    reducer: {
        user: userSlice,
    },
})