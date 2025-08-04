import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { db } from './db.js';

const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  try {
    res.send('Hello, World!');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

app.post('/', (req, res) => {
  const data = req.body;
  if (!data || !data.name) {
    return res.status(400).json({ message: 'The name field is required' });
  }
  res.status(201).json({ message: `Data received: ${data.name}` });
});

app.get('/products', (_req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error while receiving data' });
    }
    res.json(results);
  });
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || price == null) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  db.query(
    'INSERT INTO products (name, price) VALUES (?, ?)',
    [name, price],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error adding product' });
      }
      res.status(201).json({
        message: 'Product added successfully',
        productId: result.insertId
      });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});

