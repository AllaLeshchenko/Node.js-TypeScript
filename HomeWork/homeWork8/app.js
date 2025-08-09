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

// GET маршрут для получения списка всех книг
app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// POST маршрут для создания новой книги
app.post('/books', async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create book' });
  }
});

// PUT маршрут для обновления книги по её id
app.put('/books/:id', async (req, res) => {
  try {
    const [updated] = await Book.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedBook = await Book.findOne({ where: { id: req.params.id } });
      res.status(200).json(updatedBook);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update book' });
  }
});

// DELETE маршрут для удаления книги по её id
app.delete('/books/:id', async (req, res) => {
  try {
    const deleted = await Book.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json({ message: 'Book deleted' });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
});

// Запуск сервера
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
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






