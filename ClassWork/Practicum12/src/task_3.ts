// Использование кортежей
// Создайте кортеж `personInfo`, который содержит имя (строка) и возраст (число).
// Затем напишите функцию `printPersonInfo`, которая принимает этот кортеж как параметр
//  и выводит его элементы в консоль.

// Кортеж: [имя, возраст]
const personInfo: [string, number] = ['Alex', 27];

function printPersonInfo(personInfo: [string, number]): void {
    const [name, age] = personInfo;
    console.log(`Name: ${name}, Age: ${age}`);
}

printPersonInfo(personInfo);