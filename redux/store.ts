import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlice";
import loadingReducer from "./features/loadingSlice";
import blogReducer from "./features/blogSlice";

export const store = configureStore({
    reducer: {
        blogReducer,
        bookReducer,
        loadingReducer
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;