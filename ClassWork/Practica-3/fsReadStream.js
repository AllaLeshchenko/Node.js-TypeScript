const fs = require('fs');

const readStream = fs.createReadStream('input3.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log('Получим часть данных', chunk);
});

readStream.on('end', () => {
    console.log('End');
});

readStream.on('error', (err) => {
    console.error('Error', err);
});