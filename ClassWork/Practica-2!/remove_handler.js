const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('event', eventHandler);

function eventHandler() {
    console.log('Delete event')
}

emitter.emit('event');

emitter.removeListener('event', eventHandler);

emitter.emit('event');