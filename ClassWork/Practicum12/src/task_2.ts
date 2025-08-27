// Создайте массив чисел `scores`, представляющий результаты тестов студентов.
// Напишите функцию `averageScore`, которая принимает этот массив и возвращает средний балл.

const scores: number[] = [10, 20, 30, 40, 50, 60, 70, 80];

function averageScore(scores: number[]): number {
    if (scores.length === 0) {
        return 0;
    }

    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
}

console.log('Средний балл: ', averageScore(scores));
