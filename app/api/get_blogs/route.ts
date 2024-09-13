import Blog from "@/libs/models/Blog";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";



export async function GET() {
    try {
        await connectMongoDB();
        const data = await Blog.find();
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            msg: "Cannot find blogs!!"
        },
    { status: 400 });
    }
}