import Music from "@/libs/models/Music";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";



export async function GET() {
    try {
        await connectMongoDB();
        const data = await Music.find();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "Something went worng!!"
        }, { status: 400 });
    }
}