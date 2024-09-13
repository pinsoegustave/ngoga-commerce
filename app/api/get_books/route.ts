import Book from "@/libs/models/Book";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";


export async function GET() {
    try{
        await connectMongoDB();
        const data = await Book.find()
        return NextResponse.json(data);

    }
    catch(error: any) {
        return NextResponse.json({
            error,
            msg: "Something went wrong!!"
        },
    { status: 400});
    }
}