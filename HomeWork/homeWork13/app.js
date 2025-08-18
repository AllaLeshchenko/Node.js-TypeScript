import express from 'express';
import connectToDatabase from './config/db.js';
import dotenv from 'dotenv';
import Publisher from './models/Publisher.js';
import Magazine from './models/Magazine.js';
import Article from './models/Article.js';
import Tag from './models/Tag.js';
dotenv.config();

const PORT= process.env.PORT;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home page');
});

app.listen(PORT, async (req, res) => {
    try {
        await connectToDatabase();
        console.log(`Server running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Error start server: ', error)
    }
});