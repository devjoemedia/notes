import mongoose from 'mongoose';

const noteSchema= new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Note = mongoose.model("Notes", noteSchema);

export default Note; 