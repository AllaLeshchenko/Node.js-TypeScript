// task4 - Модули для работы с числовыми последовательностями
// Генерация последовательности Фибоначчи до указанного предела
export function generateFibonacci(limit) {
    const sequence = [0, 1];
    while (true) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (next > limit)
            break;
        sequence.push(next);
    }
    return sequence;
}
// Генерация простых чисел до указанного предела
export function generatePrimeNumbers(limit) {
    const primes = [];
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
}
//# sourceMappingURL=sequenceUtils.js.map