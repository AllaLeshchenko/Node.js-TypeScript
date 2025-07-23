const EventEmitter = require('events');

const emitter = new EventEmitter();

// 3. Функция countdown
function countdown(seconds, emitter) {
  let remaining = seconds;

  // 4. setInterval, чтобы каждую секунду генерировать событие 'tick'
  const interval = setInterval(() => {
    if (remaining > 0) {
      emitter.emit('tick', remaining);
      remaining--;
    } else {
      // 5. Когда достигнет нуля — событие 'end' и остановка таймера
      clearInterval(interval);
      emitter.emit('end');
    }
  }, 1000);
}

// 6. Регистрируем обработчики событий
emitter.on('tick', (timeLeft) => {
  console.log(`Осталось секунд: ${timeLeft}`);
});

emitter.on('end', () => {
  console.log('⏰ Таймер завершён!');
});

// 7. Запускаем таймер на 5 секунд
countdown(5, emitter);