// Задание 4

// Импортировать класс EventEmitter
const EventEmitter = require('events');

const logger = new EventEmitter();

logger.on('info', (message) => {
    console.log('info: ', message)
});
logger.on('warning', (message) => {
    console.log('Warning: ', message)
});
logger.on('error', (message) => {
    console.error('Error: ', message)
});

logger.emit('info', {message: 'Информационное сообщение'});
logger.emit('warning', {message: 'Сообщение предупреждения'});
logger.emit('error', {message: 'Cообщение об ошибке'});