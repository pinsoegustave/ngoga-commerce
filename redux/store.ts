import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlice";


export const store = configureStore({
    reducer: {
        bookReducer
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;