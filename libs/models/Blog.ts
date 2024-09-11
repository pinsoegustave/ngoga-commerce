import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        require: true,
    },
    blogImage: {
        type: String,
        require: true,
    },
    blogDescribe: {
        type: String,
        require: true,
    },
}, { timestamps: true });

const Blog = mongoose.models.blog || mongoose.model("blog", blogSchema);

export default Blog;