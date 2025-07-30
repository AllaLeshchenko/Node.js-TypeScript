import http from "http";
import dotenv from "dotenv";
dotenv.config()
import { format } from "date-fns"; 

const PORT = process.env.PORT || 3002;

const server = http.createServer((req, res) => {
    const timestamp = format(new Date(), "dd-MM-yyyy HH:mm:ss");

    res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.end(`Current Time: ${timestamp}`);
    res.statusCode = 200;


})

server.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`)
});

// import http from 'http'
// import {DateTime} from 'luxon'
// import dotenv from 'dotenv'
// dotenv.config()

// const PORT = process.env.PORT

// const server = http.createServer((_, res) => {
//   const date = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss')
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.setHeader('Cache-Control', 'public, max-age=3600')
//   res.end(date)
// })

// server.listen(PORT, () => {
//    console.log(`Сервер запущен на http://localhost:${PORT}`)
// })

