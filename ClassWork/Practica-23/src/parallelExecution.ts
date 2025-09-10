// Написать функцию, которая использует `Promise.all` для параллельного выполнения двух или более асинхронных операций.
// 1. Создайте новый файл TypeScript, например, `parallelExecution.ts`.
// 2. Напишите несколько функций, которые возвращают промисы (например, симулирующие асинхронные операции).
// 3. Используйте `Promise.all`, чтобы выполнить эти функции параллельно и обработать результаты.
// 4. Обработайте ошибку, если хотя бы один из промисов завершился с ошибкой.

function fetchUsers(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Users download successfylly'), 1000);
    });
}

function fetchProducts(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Products download successfylly'), 1500);
    });
}

function fetchPayments(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                resolve(`Data saved`);
            } else {
                reject(`Error data saved`);
            }
        }, 1500);
    })
}


async function main(): Promise<void> {
    try{
        const result = await Promise.all([fetchUsers(), fetchProducts(), fetchPayments()]);
        console.log(result);
    } catch (error) {
        console.log('One of the operations ended with an error', error);
    }
}
main();
