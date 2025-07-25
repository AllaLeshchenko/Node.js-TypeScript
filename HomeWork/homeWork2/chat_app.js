const EventEmitter = require('events');

const emitter = new EventEmitter();

function sendMessage(username, message, emitter) {
    emitter.emit('message', { user: username, text: message });
} 

emitter.on('message', (data) => {
    console.log(`${data.user}: ${data.text}`);
});

sendMessage('Аnna', 'Hallo!', emitter);
sendMessage('Ivan', 'Hallo, Anna!', emitter);
sendMessage('Оleg', 'how are you?', emitter);
sendMessage('Anna', 'Everything is fine!', emitter);