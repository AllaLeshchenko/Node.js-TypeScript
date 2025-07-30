import http from 'http';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3005;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf8');
    if(req.url === '/'){
        res.statusCode = 200;
        res.end('Home Page');
    }else if(req.url === '/about'){
        res.statusCode = 200;
        res.end('page-break-after: About uns');
    }else if(req.url === '/contact'){
        res.statusCode = 200;
        res.end('Page Contact');
    }else{
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});