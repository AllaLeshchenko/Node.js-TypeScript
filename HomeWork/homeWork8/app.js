import express from 'express';
import sequelize from './config/db.js';
import Book  from './models/book.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Настройте парсинг JSON данных:
app.use(express.json());

app.get('/', (_req, res) => {
    res.send('Main page');
});

// Тест подключения к БД
sequelize.authenticate()
  .then(() => console.log('DB connected'))
  .catch(err => console.error('DB connection error:', err));

// Настройка маршрута для получения списка всех книг:
app.get('/books', async (_req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// Настройка POST маршрута для создания записи
app.post('/books', async (req, res) => {
  const { title, author, year } = req.body;
  const book = await Book.create({ title, author, year });
  res.status(201).json(book);
});

// Настройка PUT маршрута для обновления записи
app.put('/books/:id', async (req, res) => {
  const { title, author, year } = req.body;
  const { id } = req.params;
  await Book.update({ title, author, year }, { where: { id } });
  res.json({ message: 'Book updated' });
});

// Настройка DELETE маршрута для удаления записи
app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  await Book.destroy({ where: { id } });
  res.json({ message: 'Book deleted' });
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




// 1.Получить все книги (GET /books): 
// Invoke-RestMethod -Uri http://localhost:3000/books -Method GET

// 2.Добавить книгу (POST /books): 
// Invoke-RestMethod -Uri http://localhost:3000/books -Method POST -Headers @{ "Content-Type" = "application/json" } -Body '{ "title": "The Hobbit", "author": "J.R.R. Tolkien", "year": 1937 }'

// 3.Обновить книгу с id=1 (PUT /books/1):
// Invoke-RestMethod -Uri http://localhost:3000/books/1 -Method PUT -Headers @{ "Content-Type" = "application/json" } -Body '{ "title": "The Hobbit", "author": "J.R.R. Tolkien", "year": 1938 }'

// 4.Проверить обновление (GET /books):
// Invoke-RestMethod -Uri http://localhost:3000/books -Method GET

// 5.Удалить книгу с id=1 (DELETE /books/1):
//Invoke-RestMethod -Uri http://localhost:3000/books/1 -Method DELETE

// 6. Проверить удаление (GET /books):
// Invoke-RestMethod -Uri http://localhost:3000/books -Method GET







