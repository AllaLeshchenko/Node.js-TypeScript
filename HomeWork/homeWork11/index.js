import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3003;


// Создаем приложение Express
const app = express();


// Используем middleware для обработки JSON в теле запроса
app.use(express.json());


// Простой массив для хранения данных (вместо базы данных)
let products = [
  { id: 1, name: 'Product One', price: 29.99 },
  { id: 2, name: 'Product Two', price: 49.99 },
];

// Главная страница
app.get('/', (_, res) => {
  res.send('Home page');
});


// Маршрут для получения всех продуктов (GET /products)
app.get('/products', (req, res) => {
  res.json(products);
});


// Маршрут для получения конкретного продукта по ID (GET /products/:id)
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);

});


// Маршрут для создания нового продукта (POST /products)
app.post('/products', (req, res) => {

  console.log('req.body:', req.body);

  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);

});


// Запуск сервера на порту 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});

