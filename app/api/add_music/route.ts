import Music from "@/libs/models/Music";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";


export async function POST ( request: NextRequest) {
    try {
        const body = await request.json();
        const { music_name, music_URL } = body;

        await connectMongoDB();

        const data = await Music.create({
            music_name, music_URL
        });

        return NextResponse.json({ msg: "New music added!", data});
    } catch (error: any) {
        return NextResponse.json({
            error,
            msg: "Something went wrong!",
        }, {
            status: 400
        });
    }
}