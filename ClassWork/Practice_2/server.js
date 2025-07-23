const http = require("http");

const PORT = 3005;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Welcome to the Home Page!");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("About Us");
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});