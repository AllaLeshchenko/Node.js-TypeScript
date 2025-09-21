import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

const key = process.env.JWT_SECRET_KEY;

// Определяем middleware-функцию для проверки авторизации
const authMiddleware = (req, res, next) => {
  try {
    // Получаем заголовок 'Authorization' из запроса
    const authHeader = req.header('Authorization');

    // Проверяем: есть ли заголовок и начинается ли он с 'Bearer '
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res
        .status(401) // Возвращаем статус "Unauthorized"
        .json({ message: 'Access denied. No token provided' }); 
    }

    // Извлекаем сам токен, убрав "Bearer " из строки
    const token = authHeader.replace('Bearer ', '');

    // Расшифровываем токен с помощью секретного ключа из переменных окружения
    const decoded = jwt.verify(token, key);

    // Добавляем расшифрованную информацию в объект запроса (может содержать user.id и т.д.)
    req.user = decoded;

    // Переходим к следующему middleware или маршруту
    next();
  } catch (error) {
    res.status(401).json({ message: 'Access denied. Invalid token' });
  }
};

export default authMiddleware;