const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.once('event', () => {
    console.log('Одноразовый обработчик вызван')
});


emitter.emit('event');
emitter.emit('event');
emitter.emit('event');