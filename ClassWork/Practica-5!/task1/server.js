import http from "http";
import fs from "fs";
import dotenv from "dotenv";
import { format } from "date-fns"; // импорт функции форматирования

dotenv.config();

const PORT = process.env.PORT || 3003;

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Получаем текущее время и форматируем его
  const timestamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

  const log = `[${timestamp}] ${method} ${url}\n`;

  fs.appendFile('request.log', log, (err) => {
    if (err) {
      console.error('Ошибка при записи лога:', err.message);
    }
  });

  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.end('Log created');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});

// import http from 'http';
// import fs from 'fs';
// import moment from 'moment';
// import dotenv from 'dotenv';
// dotenv.config();
// const server=http.createServer((req, res)=>{
//     const{method,url}=req;
//     const date= moment().format('YYYY-MM-DD HH:mm:ss')
//     const logMessage = `[${date}] метод: ${method} path: ${url}\n`;
//     fs.appendFile('requests.log',logMessage, (err) => {
//         if(err) {
//             console.error('Ошибка записи файла', err);
//         }
//     })
//     res.statusCode=200;
//     res.setHeader('Content-Type', 'text/plain; charset=utf-8');
//     res.end('Запрос залогирован');
    
// });
// const PORT= process.env.PORT || 3003;
// server.listen(PORT,()=>{
//     console.log(`Сервер запущен:http://127.0.0.1:${PORT}`)
// });