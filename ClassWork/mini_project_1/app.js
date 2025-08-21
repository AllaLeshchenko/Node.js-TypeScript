import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/index.js';
import authRouter from './routes/auth.js';
import postsRouter from './routes/posts.js';

dotenv.config();

const PORT =process.env.PORT;
const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/posts', postsRouter);

app.get('/', (_req, res) => {
    res.send('Home page');    
});


connectDB().then(()=> {
    app.listen(PORT, ()=> {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Failed start server', error.message);
})