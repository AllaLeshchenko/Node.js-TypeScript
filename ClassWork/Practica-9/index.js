import express from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;
// Имитация БД
const users = [
    {
        id: 1,
        username: 'user1',
        password: '$2b$10$EIXGFz1QluTfOCn/ztkZQ.BXHytVgMbdRsnkrpSALubslcFZP6Uyy', // хэш для "password123"
        email: 'user1@example.com',
        name: 'User One'
    },
    {
        id: 2,
        username: 'user2',
        password: '$2b$10$EIXGFz1QluTfOCn/ztkZQ.BXHytVgMbdRsnkrpSALubslcFZP6Uyy', // хэш для "password123"
        email: 'user2@example.com',
        name: 'User Two'
    }
];

app.use(express.json()); // Это midlware

app.use((req, _res, next) => {  // Это midlware где присваиваем новое свойство id: 1
    req.user = { id: 1 };
    next();
});


app.get('/profile/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    if (req.user.id !== userId){
        return res.status(403).send('Доступ запрещен')
    }
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).send('Пользователь не найден')
    }
    res.send({
        username: user.username,
        email: user.email,
        name: user.name,
    });
});

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {
        const heshedPassword = await bcrypt.hash(password, 12);
        users.push({username, password: heshedPassword});
        res.status(201).send('User was created');

    } catch (error) {
        console.error('Erro register: ', error);
        res.status(500).send('Error register');
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Находим пользователя по имени пользователя
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).send('User is not found');
    }
    console.log(username, password);
    try {
        // Сравниваем введенный пароль с хешированым паролем
       const isPasswordValid = await bcrypt.compare(password, user.password)
       if(!isPasswordValid) {
        return res.status(400).send('Wrong password')
       }
       res.send('Successful login');
    } catch (err) {
        console.error('Error login', err);
        res.status(500).send('Error login: ', err)
    }
});

    
app.listen(PORT, () => {
    console.log(`Server is running on 'http://localhost:${PORT}`);
})