import Blog from "@/libs/models/Blog";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, URLParams: any) {
    try {
        const id = URLParams.params.id;

        await connectMongoDB();
        const data = await Blog.findById(id);

        return NextResponse.json({
            msg: "get your data",
            data
        });
    } catch (err) {
        return NextResponse.json({
            err,
            msg: "Something went wrong"
        }, {
          status: 400  
        });
    }
}