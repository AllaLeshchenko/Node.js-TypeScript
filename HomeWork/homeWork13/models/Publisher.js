import mongoose from "mongoose";

const publisherSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    location: String,
});

const Publisher = mongoose.model('Publisher', publisherSchema);

export default Publisher;