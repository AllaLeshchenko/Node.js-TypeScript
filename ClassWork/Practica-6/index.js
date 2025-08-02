import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3003;

const server = express();

server.get('/', (_req, res) => {
    res.send('Welcome to my site');
});

server.get('/products', (_req, res) => {
    res.send('List of products');
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});