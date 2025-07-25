const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'test');

fs.mkdir('test', (err) => {
   if(err) {
    console.error('Ошибка при создании папки:', err);
    return;
   }
   console.log('Папка "test" создана');
   const filePath = path.join(dirPath, 'example.txt')
   fs.writeFile(filePath, 'Hello Node.js!', 'utf8', (err) => {
    if(err) {
        console.error('Ошибка при создании папки:', err);
        return;
    } 
    console.log('Файл записан');
    fs.readdir(dirPath, (err, files) => {
        if(err) {
            console.error('Error: ', err);
            return;
        }
        console.log('test', files);
      });
   });
});



