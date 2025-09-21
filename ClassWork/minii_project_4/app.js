import express from 'express';
import authRoutes from './routes/auth.js';
import connectToDatabase from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware для обработки JSON-запросов
app.use(express.json());

// Routes
app.get('/', (_, res) => {
    res.send('Main page');
});

// Connecting routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`Server running on http://localhost:${PORT}`);
})

