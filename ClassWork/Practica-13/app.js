import express from 'express';
import dotenv from 'dotenv';
import connectToDatase from './config/db.js';
import User from './models/User.js';
import Post from './models/Post.js';
import Group from './models/Group.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get('/', (_, res) => {
    res.send('Home page')
});

app.listen(PORT, async () => {
    try {
        await connectToDatase();
        console.log(`Server running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Error start server: ', error);
    }
});