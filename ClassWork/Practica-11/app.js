import express from 'express';

// Создаем приложение Express
const app = express();

// Используем middleware для обработки JSON в теле запроса
app.use(express.json());

// Простой массив для хранения данных (вместо базы данных)
let users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];

// Маршрут для получения home page (GET /)
app.get('/', (_req, res) => {
  res.send('Home page');
});

// Маршрут для получения всех пользователей (GET /users)
app.get('/users', (req, res) => {
  res.json(users);
});

// Маршрут для получения конкретного пользователя по ID (GET /users/:id)
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// Маршрут для создания нового пользователя (POST /users)
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Маршрут для обновления пользователя (PUT /users/:id)
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  res.json(user);
});

// Маршрут для удаления пользователя (DELETE /users/:id)
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});