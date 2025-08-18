import mongoose from "mongoose";

const magazineSchema = mongoose.Schema({
    title: {type: String, required: true, unique: true},
    issueNumber: Number,
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher'
    }
});

const Magazine = mongoose.model('Magazine', magazineSchema);

export default Magazine;