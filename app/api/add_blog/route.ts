import Blog from "@/libs/models/Blog";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";



export async function POST( request: NextRequest ) {
    try {
        const body = await request.json();
        const { blogTitle, blogImage, fileKey, description } = body;

        await connectMongoDB();

        const data = await Blog.create({
            blogTitle, blogImage, fileKey, description
        });

        return NextResponse.json({ msg: "Blog Added Successfully", data});
    } catch (error) {
        return NextResponse.json({
            error, 
            msg: "Something went wrong!!",
        },
    { status: 400 })
    }
}