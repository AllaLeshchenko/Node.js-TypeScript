import express, { Application, Request, Response } from 'express';
import taskRouter from './routes/taskRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.send('Hallo, TypeScript with Express');
});

app.use('/api/tasks', taskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
