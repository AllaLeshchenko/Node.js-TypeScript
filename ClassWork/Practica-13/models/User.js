import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    passsword: {type: String, required: true},
    groups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Group',
        }
    ],
});

const User = mongoose.model('User', userSchema);

export default User;