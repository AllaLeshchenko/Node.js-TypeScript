import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productsRouter from './routes/productRoutes.js';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.get('/', (_, res) => {
    res.send('Home page')
});

app.listen(PORT, async () => {
    try{
        await connectDB();
        console.log(`Server running on http://localhost:${PORT}`);
    } catch(error) {
        console.error('Error start server: ', error);
    }
});