const fs = require('fs');
require('dotenv').config();

const fileName = process.env.FILENAME; // Получаем имя файла из переменной окружения
const content = 'Hallo! This is a test write to a file.';

// Запись в файл
fs.writeFile(fileName, content, (err) => {
    if(err) {
        console.error('Error: ', err)
        return
    }
    console.log(`File "${fileName}" created successfully`);

// Чтение содержимого
  fs.readFile(fileName, 'utf8', (err, data) => {
      if(err) {
          console.error('Error: ', err)
          return
      }
      console.log('File contents: ', data)
  });
});