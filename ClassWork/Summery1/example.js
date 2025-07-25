// const EventEmitter = require('events');

// // Первый объект EventEmitter
// const emitter1 = new EventEmitter();

// // Второй объект EventEmitter
// const emitter2 = new EventEmitter();


// emitter1.on('greet', (name) => {
//     console.log(`Emitter 1: Hello ${name}`);
// });

// emitter2.on('greet', (name) => {
//     console.log(`Emitter 2: Hello ${name}`);
// });

// emitter2.on('end', (name) => {
//     console.log(`Emitter 2: Bye ${name}`);
// });

// emitter1.emit('greet', 'Alex');
// emitter2.emit('greet', 'John');
// emitter2.emit('end', 'Nik');

const fs = require('fs');
const {performance} = require('perf_hooks');

async function testChunkSize(sizeChunk) {
    return new Promise((resolve, reject) => {
        const startMark = performance.now(); // Начало отсчета времени
        const readableStream = fs.createReadStream('input3.txt', { highWaterMark: sizeChunk });
        readableStream.on('data', () => {
            // Обрабатываем chunk
        });
        readableStream.on('end', () => {
            const endMark = performance.now(); // окончание отсчета времени
            const timeTaken = endMark - startMark;
            resolve(timeTaken); // Возвращаем время обработки
        });
        readableStream.on('error', (err) => {
            reject(err); // Обрабатываем ошибки
        })
    })
};

async function runTest() {
    const chunkSize = [16 * 1024, 32 * 1024, 64 * 1024, 128 * 1024, 192 * 1024, 256 * 1024];
    for (const size of chunkSize) {
        const timeTaken = await testChunkSize(size);
        console.log(`Размер чанка: ${size / 1024} KB - Время обработки: ${timeTaken.toFixed(2)} ms`);
    }
}
runTest();
