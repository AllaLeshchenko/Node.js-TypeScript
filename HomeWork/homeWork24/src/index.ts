import express, { Application, Request, Response } from 'express';
import connectToDatabase from './config/db.js';
import userRouter from './routes/userRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();
const PORT: string | number = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
    res.send('Hallo, TypeScript with Express');
});

app.use('/api', userRouter);

app.listen(PORT, async() => {
    try {
        await connectToDatabase();
        console.log(`Server running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Failed to start the server due to MongoDB connection issue', error);
    }
    
})