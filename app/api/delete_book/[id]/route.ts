import Book from "@/libs/models/Book";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request: NextRequest, URLParams: any) {
    try {
        const id  = URLParams.params.id;
        await connectMongoDB();
        await Book.findByIdAndDelete(id);
        return NextResponse.json({ msg: "Book Deleted Successfully!!"});
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "Something went wrong!!",
        },{
            status: 400
        });
    }
}