const http = require('http');
const fs = require('fs');
const { format } = require('date-fns');


const server = http.createServer((req, res) => {
    try {
        throw new Error('Something went wrong on the server!');
    }
    catch(error) {
        const timestamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
        const errorMessage = `[${timestamp}] ${error.message}\n`;

        fs.appendFile('errors.log', errorMessage, (err) => {
            if(err) {
                console.error('Failed to write to file error:', err);
            }
        });

        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
    }
});
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on  http://127.0.0.1:${PORT}`);
});
