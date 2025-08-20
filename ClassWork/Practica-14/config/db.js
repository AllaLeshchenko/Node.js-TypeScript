import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.MONGO_URL;

async function connectToDatabase() {
    try{
        mongoose.connect(URL);
        console.log('Successfully connected to mongodb')
    } catch(error) {
        console.error('Error connected to mongoDB', error)
    }
};

export default connectToDatabase;