import mongoose from "mongoose";



const bookSchema = new mongoose.Schema({
    book_name: {
        type: String,
        required: true,
    },
    book_URL: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Book = mongoose.model("book", bookSchema);

export default Book;