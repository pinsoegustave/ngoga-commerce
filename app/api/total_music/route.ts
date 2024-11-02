import Blog from "@/libs/models/Blog";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";


export async function GET() {
    await connectMongoDB();

    try {
        const count_blogs = await Blog.countDocuments();
        return NextResponse.json({ count_blogs });
    }
    catch (error) {
        return NextResponse.json({ error_msg: "Unable to check blogs!"}, {status: 500});
    }
}