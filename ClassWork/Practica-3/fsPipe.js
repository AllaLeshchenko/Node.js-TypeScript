const fs = require('fs');

// Создаем читающий поток для исходного файла
const readStream = fs.createReadStream('input3.txt', 'utf8');

// Создаем записывающий поток для нового файла
const writestream = fs.createWriteStream('output3.txt', 'utf8')

// Объединяем читающий и записывающий потоки
readStream.pipe(writestream);

// Обрабатываем событие 'finish' для записывающего потока
writestream.on('finish', () => {
    console.log("Копирование файла завершено")
});

// Обрабатываем событие 'error' для чтения
readStream.on('error', (err) => {
    console.error(' Ошибка при чтении файла:', err)
});

// Обрабатываем событие 'error' для запиписи
readStream.on('error', (err) => {
    console.error(' Ошибка при записи файла:', err)
});