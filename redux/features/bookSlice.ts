import { IBooks } from "@/app/admin/dashboard/books/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IBooks = {
    book_id: "",
    book_name: "",
    book_URL: ""
};

export const bookSlice = createSlice({
    name: "bookSlice",
    initialState,

    reducers: {
        setBooks: (state: any, action: PayloadAction<IBooks>) => {
            return action.payload;
        },
    },
});

export const { setBooks } = bookSlice.actions;
export default bookSlice.reducer;