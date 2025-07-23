console.log('Start');  // 1

setTimeout(() => {   // 4
    console.log('setTimeout')
}, 5000);


Promise.resolve().then(() => {  // 3
    console.log('Promisse callback');
});

console.log('End');  // 2


// Отслеживаем выполнение асинхронной операции с помощью промис

function delay(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};

console.log(delay(0));
 delay(1000).then(() => {
    console.log('Promisee fullfilled');
 })