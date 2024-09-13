import Music from "@/libs/models/Music";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";



export async function DELETE (URLParams: any) {
    try {
        const id = URLParams.params.id;
        await connectMongoDB();
        await Music.findByIdAndDelete(id);
        return NextResponse.json({ msg: "Music Deleted Successfully!!"});
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "Some errors, Try Again!!",
        },
    { status: 400 });
    }
}