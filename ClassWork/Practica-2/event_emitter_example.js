// Задание1

// Импортировать класс EventEmitter
const EventEmitter = require('events');

// Создаем новый екземпляр класса EventEmitter
// Этот объект будет использоватся для работы с событиями
const emitter = new EventEmitter();

// Регистрируем обработчик события
emitter.on('myEvent', () => {
    console.log('Событие произошло!');
});

// Генерируем событие
console.log(emitter.emit('myEvent'));
console.log(emitter.emit('myEvent'));
//emitter.emit('myEvent');