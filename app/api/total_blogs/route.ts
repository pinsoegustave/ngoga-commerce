import Blog from "@/libs/models/Blog";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function GET() {
    await connectMongoDB();

    try {
        const count = await Blog.countDocuments();
        return NextResponse.json({ count });
    } 
    catch (error) {
        return NextResponse.json({ error: "Unable to count the blogs!!"}, { status: 500})
    } 
}