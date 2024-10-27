import Blog from "@/libs/models/Blog";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";



export async function PUT(request: NextRequest, URLParams: any) {
    try {
        const body = await request.json();
        const id = URLParams.params.id;
        const { blogTitle, blogImage, description } = body;

        await connectMongoDB();

        const data = await Blog.findByIdAndUpdate(id, {
            blogTitle,
            blogImage,
            description
        });

        return NextResponse.json({ msg: "Updated Successfully", data });
    }
    catch (error) {
        return NextResponse.json({
            error,
            msg: "Something went wrong!!",
        }, {
            status: 400
        });
    }
}