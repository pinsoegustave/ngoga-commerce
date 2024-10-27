import { IBlogs } from "@/app/admin/dashboard/blogs/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IBlogs = {
    _id: "",
    blogTitle: "",
    blogImage: "",
    fileKey: "",
    description: "",
};

export const blogSlice = createSlice({
    name: "blogSlice",
    initialState,
    reducers: {
        theBlog: (state, action: PayloadAction<IBlogs>) => {
            return action.payload;
        },
    },
});

export const { theBlog } = blogSlice.actions;
export default blogSlice.reducer;