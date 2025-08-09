import express from 'express';
import sequelize from './config/db.js';
import User from './models/user.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (_req, res) => {
    res.send('Main page');
});

// Создание нового пользователя
app.get('/createUser', (req, res) => {
    const { name, email } = req.query;
    try {
        const newUser = User.create({ name, email });
        res.status(201).send(newUser);
    } catch (error) {
        console.error('Error created new user', error);
        res.status(500).send({ error: 'Error created new user' });
    }
});

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been successfully');
        console.log(`Server running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Error: ' + error);
    }
});