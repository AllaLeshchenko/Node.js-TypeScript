const EventEmitter = require('events');

const emitter = new EventEmitter();

function sendMessage(username, message, emitter) {
    emitter.emit('message', { user: username, text: message });
} 

emitter.on('message', (data) => {
    console.log(`${data.user}: ${data.text}`);
});

sendMessage('Анна', 'Привет всем!', emitter);
sendMessage('Иван', 'Привет, Анна!', emitter);
sendMessage('Олег', 'Как дела?', emitter);