import Blog from "@/libs/models/Blog";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request: NextRequest, URLParams: any) {
    try {
        const id = URLParams.params.id;
        await connectMongoDB();
        await Blog.findByIdAndDelete(id);
        return NextResponse.json({ msg: "Blog was deleted!" });
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            msg: "Not deleted, Try Again",
        },
    { status: 400 });
    }
}