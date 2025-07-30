const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if(req.method === 'PUT') {
        res.statusCode = 200;
        res.end('PUT request processed');
    } else if(req.method === 'DELETE') {
        res.statusCode = 200;
        res.end('DELETE request processed');
    } else {
        res.statusCode = 405;
        res.end('Method not supported')
    }
});
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});








// Проверка для PUT:
// curl -Method PUT "http://127.0.0.1:3000"

// Проверка для DELETE:
// curl -Method DELETE "http://127.0.0.1:3000"