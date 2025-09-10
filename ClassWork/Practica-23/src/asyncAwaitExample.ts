// Создать асинхронную функцию, которая вызывает несколько промисов последовательно с использованием `await`.
// 1. Создайте новый файл TypeScript, например, `asyncAwaitExample.ts`.
// 2. Напишите несколько функций, которые возвращают промисы (например, симуляции асинхронных операций).
// 3. Создайте асинхронную функцию, которая последовательно вызывает эти функции с использованием `await`.
// 4. Добавьте обработку ошибок с использованием блока `try/catch`.

function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Данные успешно загружены')
        }, 2000);
    });
}

function processData(data: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Обработанные данные: ${data.toUpperCase()}`)
        }, 3000);
    })
}

function saveData(data: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.3) {
                resolve(`Данные успешно сохранены: ${data}`);
            } else {
                reject(`Ошибка при сохранении данных`);
            }
        }, 1500);
    })
}

async function mainAsync(): Promise<void> {
    try {
        const fetchDataSave = await fetchData();
        console.log('Шаг первый: ', fetchDataSave);

        const processDataSave = await processData(fetchDataSave);
        console.log('Шаг второй: ', processDataSave);

        const saveDataSave = await saveData(processDataSave);
        console.log('Шаг третий: ', saveDataSave);

    } catch (error) {
        if (typeof error === 'string') {
            console.error('Error: ', error.toUpperCase())
        } else if ( error instanceof Error){
            console.log(error.message);
        } else {
            console.log('Error: ', error);
        }
    }
}

mainAsync();