// Шаг1 импорт необходимых модулей
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

// Шаг2 определяем порт для http-сервера
const PORT = process.env.PORT;

// Шаг3 создаем HTTP сервер 
const server = http.createServer((_, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('This my first web-server');
});

// Шаг4 запускаем сервер ипрослушиваем его
server.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});