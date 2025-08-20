import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.MONGO_URL;
const client = new MongoClient(URL);

let db;

export async function connectDB() {
    try {
        await client.connect();
        db = client.db();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};

export function getDB() {
    if (!db) {
        throw new Error('Database not connect');
    }
    return db;
}
