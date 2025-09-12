import express, { Application, Request, Response } from 'express';
import taskRouter from './routes/taskRoutes.js';
import logger from './middleware/logger.js';                // Импорт middleware для логирования запросов
import errorHandler from './middleware/errorMiddleware.js'; // Импорт middleware для глобальной обработки ошибок
import dotenv from 'dotenv';

dotenv.config();  // Инициализация dotenv для работы с переменными окружения

const app: Application = express();  // Создание экземпляра приложения Express

const PORT: string | number = process.env.PORT || 3000;

app.use(express.json());  // Middleware для парсинга JSON в теле запроса

app.use(logger);  // Подключение собственного middleware для логирования всех входящих запросов

app.get('/', (_req: Request, res: Response) => {
    res.send('Hallo, TypeScript with Express');
});

// Основной маршрут для работы с задачами, делегируется в отдельный роутер
app.use('/api/tasks', taskRouter);  // Все маршруты начинаются с /api/tasks

// Глобальный middleware для обработки ошибок
app.use(errorHandler);  // Должен быть подключён последним, чтобы "ловить" ошибки во всех предыдущих обработчиках

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
