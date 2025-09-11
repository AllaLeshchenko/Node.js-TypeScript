import express from 'express';
import taskRouter from './routes/taskRoutes.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get('/', (_req, res) => {
    res.send('Hallo, TypeScript with Express');
});
app.use('/api/tasks', taskRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map