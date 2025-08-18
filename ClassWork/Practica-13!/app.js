import express from 'express';
import dotenv from 'dotenv';
import connectToDatase from './config/db.js';
import Author from './models/Author.js';
import Book from './models/Book.js';
import Category from './models/Category.js';
import Product from './models/Product.js';
import Student from './models/Student.js';
import Course from './models/Course.js';
import Actor from './models/Actor.js';
import Movie from './models/Movie.js';
dotenv.config();


const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get('/', (_, res) => {
    res.send('Home page');
});

app.listen(PORT, async () => {
    try {
        await connectToDatase();
        console.log(`Server running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Error start server: ', error);
    }
});