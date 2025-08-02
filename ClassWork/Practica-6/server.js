import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

const server = express();

server.get('/', (_, res) => {
    res.send('Hello , world! This is my first express-server');
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});