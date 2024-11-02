import Book from "@/libs/models/Book";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";


export async function GET() {
    await connectMongoDB();

    try {
        const count_books = await Book.countDocuments();
        return NextResponse.json({ count_books });
    }
    catch (error) {
        return NextResponse.json({ error: "Unable to count books!!"}, { status: 500})
    }

}