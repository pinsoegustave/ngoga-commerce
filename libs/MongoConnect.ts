import mongoose  from 'mongoose';


export const connectMongoDB = async () => {
    if (mongoose.connection.readyState === 1) {
        return true;
    }

    try {
        await mongoose.connect(process.env.MONGO_URL!);
        await mongoose.connection.on("connected", () => {
            console.log("Ping successful, MongoDB Connected");
        });
        return true;
    } catch (error: any) {
        console.log(error);
    }
}