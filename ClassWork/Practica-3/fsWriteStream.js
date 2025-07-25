const fs = require('fs');

//  Создаем записывающий поток для файла outpu2.txt
const writeStream = fs.createWriteStream('output2.txt', 'utf8');

// Записываем данные в поток
writeStream.write('Это первая строка.\n');
writeStream.write('Это вторая строка.\n');

// Завершаем запись и закрываем поток
writeStream.end('Это последняя строка.\n');

// Обрабатываем сщбытие finish, коорое возникает после завершение записи всех данныч 
writeStream.on('finish', () => {
    console.log('Запись файла завершена')
});

//Обрабатываем событие 'error', которое возникает при ошибке записи файла
writeStream.on('error', (err) => {
    console.error('Ошибка при записи файла', err);
});
