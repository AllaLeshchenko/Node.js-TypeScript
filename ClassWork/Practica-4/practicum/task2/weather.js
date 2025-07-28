const axios = require('axios');
require('dotenv').config();

const CITY = process.env.CITY;

if (!CITY) {
    console.log('Переменная city не существует');
    process.exit(1);
}

const URL = `https://wttr.in/${CITY}?format=%t`;

axios.get(URL) 
.then(response => {
    console.log(`Погода в городе ${CITY}: ${response.data}`);
  })
  .catch(error => {
    console.error('Ошибка при получении данных о погоде:', error.message);
  });