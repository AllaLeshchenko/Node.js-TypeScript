import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    const authHeader = req.headers['authorization'];

    if(!authHeader) {
        res.statusCode = 401;
        res.end('Unauthorized');
    } else {
        res.statusCode = 200;
        res.end('Authorization header received');
    }
});

server.listen(PORT, () => {
     console.log(`Server is running on http://127.0.0.1:${PORT}`)
});