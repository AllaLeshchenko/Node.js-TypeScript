import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import pool from './db.js';

const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.json());

// === Маршрут GET /
app.get('/', (req, res) => {
  try {
    res.send('Hello, World!');
  } catch (err) {
    res.status(500).send('Ошибка сервера');
  }
});

// === Маршрут POST /
app.post('/', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Поле "name" обязательно' });
  }

  res.json({ message: `Привет, ${name}!` });
});

// === Маршрут GET /products
app.get('/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при получении продуктов' });
  }
});

// === Маршрут POST /products
app.post('/products', async (req, res) => {
  const { name, price } = req.body;

  // Проверка данных
  if (!name || typeof price !== 'number') {
    return res.status(400).json({
      error: 'Необходимо указать корректные "name" (строка) и "price" (число)',
    });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO products (name, price) VALUES (?, ?)',
      [name, price]
    );

    res.status(201).json({
      message: 'Продукт успешно добавлен',
      productId: result.insertId,
    });
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при добавлении продукта' });
  }
});

// === Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});