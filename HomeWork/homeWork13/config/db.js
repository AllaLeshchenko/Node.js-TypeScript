import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Successfully connected to mongodb')
    } catch (error) {
        console.error('Error connecting to mongodb', error)
    }
};

export default connectToDatabase;