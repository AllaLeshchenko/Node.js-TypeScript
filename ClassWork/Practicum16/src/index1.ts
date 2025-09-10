// Асинхронное ожидание нескольких промисов
// 1. Создайте три функции, которые возвращают промисы, разрешающиеся через случайное время(например, от 1 до 3 секунд).
// 2. Используйте `Promise.all`, чтобы дождаться выполнения всех промисов и вывести их результаты в консоль.
function getTime(): number {
    return Math.floor(Math.random() * 2000) + 1000;
}
function fetchUsers(): Promise<string> {
    const time = getTime();
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Users successfully received ${time}`)
        }, time)
    })
}
function fetchProducts(): Promise<string> {
    const time = getTime();
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Products successfully received ${time}`)
        }, time)
    })
}
function fetchPosts(): Promise<string> {
    const time = getTime();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.1) {
               resolve(`Posts successfully received ${time}`) 
            } else {
                reject('Error fetching data')
            }
            
        }, time)
    })
}
async function allPromise(): Promise<void> {
    try {
        const  result = await Promise.all([fetchUsers(), fetchProducts(), fetchPosts()]);
        console.log(result);
        
    } catch (error) {
        console.error('One of the operations ended with an error', error);
        
    }
}
// function taskOne(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Функция один отработала за 1 сек')
//         }, 1000);
//     });
// }
// function taskTwo(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Функция два отработала за 2 сек')
//         }, 2000);
//     });
// }
// function taskThree(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Функция три отработала за 3 сек')
//         }, 3000);
//     });
// }
// function taskFour(): Promise<string> {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//       if (Math.random() > 0.3) {
//         resolve(`Данные успешно сохранены:`);
//       } else {
//         reject('Ошибка при сохранении данных');
//       }
//     }, 1500);
//     });
// }

// Promise.all([taskOne(), taskTwo(), taskThree()])
//     .then((results) => {
//         console.log(`Все функции выполнены:`);
//         console.log(results);
//     })
//     .catch((error) => {
//         console.error('Error: ', error)
//     })