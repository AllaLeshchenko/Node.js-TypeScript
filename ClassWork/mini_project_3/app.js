import express from 'express';
import connectToDatabase from './db/index.js';
import dotenv from 'dotenv';
import router from './routes/balanceRoutes.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use('/', router)

app.get('/', (_, res) => {
    res.send('Home page');
});

app.listen(PORT, async () => {
    try {
        await connectToDatabase();
        console.log(`Server running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Error connecting server: ', error);
    }
});
