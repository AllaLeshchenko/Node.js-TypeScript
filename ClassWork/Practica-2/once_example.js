// Задание 3

// Импортировать класс EventEmitter
const EventEmitter = require('events');

// Создаем новый екземпляр класса EventEmitter
// Этот объект будет использоватся для работы с событиями
const emitter = new EventEmitter();

// Определение первого обработчика события
emitter.once('onceEvent', () => {
    console.log('once method')
})


// Генерация обработчика события onceEvent
emitter.emit('onceEvent');
emitter.emit('onceEvent');
emitter.emit('onceEvent');