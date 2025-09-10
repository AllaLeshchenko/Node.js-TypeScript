// Создайте новый файл TypeScript, например, `promiseExample.ts`.
// Напишите промис, который разрешается или отклоняется через 2 секунды, используя `setTimeout`.
// Обработайте результат с помощью `then`, `catch`, и `finally`.

function createRandomPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
           const isSuccess: boolean = Math.random() > 0.5;
           if(isSuccess) {
              resolve('Promise is success');
           } else {
              reject('Promise is failed');
           }
        }, 3000);
    });
}

createRandomPromise()
    .then(result => {
        console.log('Result: ', result)
    })
    .catch(err => {
        console.log('Error: ', err)
    })
    .finally(() => {
        console.log('Promise is finished')
    });