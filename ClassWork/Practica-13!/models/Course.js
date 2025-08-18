import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String, default: ''},
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
        }
    ]
});

const Course = mongoose.model('Course', courseSchema);

export default Course;