import Blog from "@/libs/models/Blog";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";


export async function DELETE(URLParams: any) {
    try {
        const id = URLParams.params.id;
        await connectMongoDB();
        const data = await Blog.findByIdAndDelete(id);
        return NextResponse.json({ msg: "Blog was deleted!" });
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            msg: "Not deleted, Try Again",
        },
    { status: 400 });
    }
}