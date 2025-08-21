import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('Клиент подключился: ', socket.id);
    socket.on('message', (msg) => {
        console.log('Сообщение: ', msg);
        // рассылаем всем подключенным клиентам
        io.emit('message', msg);
    })
    socket.on('disconnect', () => {
        console.log('Клиент отключился: ', socket.id);
    });
});


app.post('/create-user', (_, res) => {
    res.send('User created')
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});