import Book from "@/libs/models/Book";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";


export async function POST( request: NextRequest) {
    try {
        const body = await request.json();
        const { book_name, book_URL } = body;

        await connectMongoDB();

        const data = await Book.create({
            book_name, book_URL
        });

        return NextResponse.json({ msg: "Book Added Successfully!!", data});
    } catch (error: any) {
        return NextResponse.json({
            error,
            msg: "Something went wrong, Try Again!",
        }, {
            status: 400
        });
    }
}