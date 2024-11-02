import Music from "@/libs/models/Music";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";


export async function GET() {
    await connectMongoDB();

    try {
        const count_videos = await Music.countDocuments();
        return NextResponse.json({ count_videos });
    }
    catch (error) {
        return NextResponse.json({ error_msg: "Unable to check blogs!"}, {status: 500});
    }
}