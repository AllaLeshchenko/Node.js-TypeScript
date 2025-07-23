// Задание2


// Импортировать класс EventEmitter
const EventEmitter = require('events');

// Создаем новый екземпляр класса EventEmitter
// Этот объект будет использоватся для работы с событиями
const emitter = new EventEmitter();

// Определение первого обработчика события
function firstHandler(data) {
    console.log('Первый обработчик события - event ' + data);
}

// Определение второго обработчика события
function secondHandler() {
    console.log('Второй обработчик события - event');
}

// Регистрация первого обработчика события event
emitter.on('event', firstHandler);

// Регистрация второго обработчика события event
emitter.on('event', secondHandler);

//Удаление первого обработчика события event
emitter.removeListener('event', firstHandler);+

// Генерация события event
emitter.emit('event', 'Это наши данные');