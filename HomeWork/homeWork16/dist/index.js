"use strict";
// Задание 1 - Функция приветствия 
function greetUser(name) {
    console.log(`Hallo, ${name}!`);
}
greetUser("Alla");
function printPersonInfo(person) {
    console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
}
const user = {
    name: "Alex",
    age: 30,
    city: "Berlin"
};
printPersonInfo(user);
// Задание 3 - Простая типизация для числового параметра
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(4)); // 16
// Задание 4 - Типизация функции с boolean
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(10)); // true
console.log(isEven(7)); // false
function printStudentInfo(student) {
    console.log(`Student: ${student.name}, Grade: ${student.grade}`);
}
const student1 = {
    name: "Оlga",
    grade: 5
};
printStudentInfo(student1);
// Задание 6 - Функция с типом `void`
function logMessage(message) {
    console.log(message);
}
logMessage("This is a text message");
//# sourceMappingURL=index.js.map