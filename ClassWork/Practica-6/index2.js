import express from 'express';
import dotenv from 'dotenv';
dotenv.config();// Поинициализировали dotenv

const PORT = process.env.PORT || 3003;

const server = express();

// Маршрут для корневого URL
server.get('/', (_, res) => {
    res.send('Hello, World!');
});

// Маршрут для получения всех пользователей
server.get('/users', (_, res) => {
    res.send('List os users!');
});

// Маршрут для получения конкретного пользователя по ID
server.get('/users/:id', (req, res) => {
    const idUser = req.params.id;
    console.log (idUser)
    res.send('User ID: ' + idUser);
});

// Маршрут для поиска
server.get('/search', (req, res) => {
    const query = req.query.q;
    res.send('Search query: ', query);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});