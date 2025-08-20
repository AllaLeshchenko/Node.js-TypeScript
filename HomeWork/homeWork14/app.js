import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import categoryRouter from './routes/categoryRoutes.js';
import productRouter from './routes/productRouter.js';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/categories', categoryRouter);
app.use('/products', productRouter);

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