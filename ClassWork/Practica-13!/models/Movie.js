import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    title: {type: String, required: true, unique: true},
    releaseYear: {type: Number, required: true},
    actors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Actor'
        }
    ]
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
