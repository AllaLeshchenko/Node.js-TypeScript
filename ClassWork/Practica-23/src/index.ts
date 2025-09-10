function testReject(): Promise<number> {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if(randomNumber > 0.5){
            resolve(randomNumber);
        } else {
            reject(`Bad luck - ${randomNumber}`);
        }
    });
};
testReject()
    .then(value => console.log(value))
    .catch(err => {
        console.error('Rejected:', err);
    });


// 1. Синхронная задача:
// Напишите простую функцию, которая складывает два числа и возвращает результат.
// 2. Переделка в асинхронную задачу:
// Теперь переделайте эту функцию так, чтобы она выполнялась асинхронно. Используйте `setTimeout` для
// имитации задержки в 2 секунды.
function add(a:number, b: number): number{
    return a + b
}
console.log(add(3, 5));

function addAsync(a:number, b: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000);
    });
}

console.log(addAsync(3, 8));

addAsync(5, 8)
    .then((result) => {
        console.log(result)
    });