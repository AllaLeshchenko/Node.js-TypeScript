import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const SECRET_JWT = process.env.SECRET_JWT;
const PORT = process.env.PORT;

const app = express();

function logRequest(req, _res, next) {
    console.log(`Method request: ${req.method}. URL request: ${req.url}`);
    next();
}

function authenticateJWT(req, res, next) {
    // Извлекаем токен из заголовка Authorization
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized access: no token provided' });
    }

    jwt.verify(token, SECRET_JWT, (err, user) => {
        if (err) {
            return res.status(403).send({ message: 'The token is invalid or expired' });
        }
        req.user = user;
        next();
    });
}

const users = [
    {
        id: 1,
        email: 'example@gmail.com',
        password: await bcrypt.hash('276fg4u21dg732fdj92374rt', 12),
        name: "Alexandr Petrishchev",
    },
];

app.use(express.json());
app.use(logRequest);

app.get('/', (_, res) => {
    res.send('Home page');
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(404).send({ message: 'Not found user' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).send({ message: 'Invalid password' });
        }

        // Генерируем токен
        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                userName: user.name,
            },
            SECRET_JWT,
            { expiresIn: '10s' }
        );
        // Отправляем токен
        res.send(token);

    } catch (error) {
        res.status(500).send({ message: 'Server error' });
        console.error('Server error: ' + error.message);
    }
});

app.get('/protected', authenticateJWT, (req, res) => {
    res.send({ message: 'This is protected route', user: req.user })
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});