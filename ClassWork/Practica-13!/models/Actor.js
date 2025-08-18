import mongoose from "mongoose";

const actorSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    birthdate: {type: Date, required: true},
    movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ]
});

const Actor = mongoose.model('Actor', actorSchema);

export default Actor;