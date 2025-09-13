import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URL = process.env.MONGO_URL || '';
async function connectToDatabase() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected successfully to mongoDB");
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Failed to connect to MongoDB:", error.message);
        }
        else {
            console.error("Unknown error while connecting to MongoDB:", error);
        }
    }
}
export default connectToDatabase;
//# sourceMappingURL=db.js.map