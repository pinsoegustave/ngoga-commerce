import mongoose from "mongoose";


const musicSchema = new mongoose.Schema({
    music_name: {
        type: String,
        required: true
    },
    music_URL: {
        type: String,
        required: true
    },
}, { timestamps: true});

const Music =  mongoose.models.music || mongoose.model("music", musicSchema);

export default Music;