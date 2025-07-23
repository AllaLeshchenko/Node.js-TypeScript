const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('event', () => {
    console.log('First event')
});

emitter.on('event', () => {
    console.log('Second event')
});

emitter.emit('event');