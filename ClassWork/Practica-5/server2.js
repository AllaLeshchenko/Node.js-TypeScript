import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3003;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.statusCode = 200;

  // const method = req.method;
  // const url = req.url;

  const { method, url } = req;
  console.log(method);
  console.log(url);

  if (method === 'GET') {
    if (url === '/') {
      res.end('Добро пожаловать на главную страницу!');
    } else if (url === '/about') {
      res.end('О нас');
    } else if (url === '/contacts') {
      res.end('Контакты');
    } else {
      res.statusCode = 404;
      res.end('Страница не найдена');
    }
  } else if (method === 'POST') {
    if (url === '/submit') {
      res.end('Форма отправлена');
    } else {
      res.statusCode = 404;
      res.end('Страница не найдена');
    }
  } else {
    res.statusCode = 405;
    res.end('Метод не разрешен');
  }
});
server.listen(PORT, () => {
  console.log(`Server is running om http://127.0.0.1:${PORT}`);
});


// import http from 'http';
// import dotenv from 'dotenv';
// dotenv.config();
// const PORT = process.env.PORT || 3003;


// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/plain; charset=utf8');
//     res.statusCode  = 200;

//     // const method = req.method;
//     // const url = req.url;
//     const {method, url} = req;
//     console.log(method);
//     console.log(url)

//     if(method === 'GET') {
//         if(url === '/') {
//             res.end('Home Page');
//         }else if(url === '/about') {
//             res.end('Page about uns');
//         }else if(url === '/contacts') {
//             res.end('Page Contact');
//         }else {
//             res.statusCode = 404;
//             res.end('Page not Found');
//         }
//     } else if(method === 'POST') {
//         if( url === '/submit') {
//             res.end('Form submitted')
//         }else {
//             res.statusCode = 404;
//             res.end('Page not Found');
//         }
//     } else {
//         res.statusCode = 405;
//         res.end('Method not allowed');
//     }
// });

// server.listen(PORT, () => {
//     console.log(`Server is running at http://127.0.0.1:${PORT}`)
// })