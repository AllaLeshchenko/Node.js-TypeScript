import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connect to DB is successfully')
    } catch (error) {
        console.error('Error connected to DB', error.message);
    }
}

export default connectDB;