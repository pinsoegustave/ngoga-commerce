import Music from "@/libs/models/Music";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";



export async function DELETE (request: NextRequest, URLParams: any) {
    try {
        const { id }  = URLParams.params;
        if (!id) {
            throw new Error("ID is required");
        }
        await connectMongoDB();
        await Music.findByIdAndDelete(id);
        return NextResponse.json({ msg: "Music Deleted Successfully!!"});
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            msg: "Some errors, Try Again!!",
        },
    { status: 400 });
    }
}