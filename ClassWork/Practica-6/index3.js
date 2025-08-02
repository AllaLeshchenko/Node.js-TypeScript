import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3003;

const app = express();

// Middleware для обработки тела запроса (JSON и URL-encoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Маршрут для корневого URL
app.get('/', (_, res) => {
    res.send('Hello, World!');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const userName = req.query.name;
    res.send(`User ID: ${userId}, UserName: ${userName}`);
});

app.get('/text', (req, res) => {
    res.send("Hello, this is a JSON response!");
});

app.get('/json', (req, res) => {
    res.json({message: 'Hallo, this is a JSON response!'});
});

app.post('/data', (req, res) => {
    const userId = req.body.userId;
    const userName = req.body.userName;
    res.send(`UserId: ${userId}, userName: ${userName}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});