// ● Функция `sumArray`, которая принимает массив чисел и возвращает их сумму.
export function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
// ● Функция `findMax`, которая находит максимальное число в массиве.
export function findMax(numbers) {
    if (numbers.length === 0) {
        throw new Error('Массив пустой');
    }
    return Math.max(...numbers);
}
// export function maxius(...numbers: number[]): number {
//     return numbers.length
// }
//# sourceMappingURL=arrayUtils.js.map