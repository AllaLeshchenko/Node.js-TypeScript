"use strict";
function greet(name) {
    return `Hello, my name is ${name}`;
}
const resultGreet = greet('Alex');
console.log(resultGreet);
console.log(greet('Alex'));
let count = 10;
let username = 'JohnDoe';
let isLoggetIn = false;
function add(a, b) {
    return a + b;
}
console.log(add(75346, 1));
const user = {
    name: 'Alice',
    age: 30,
};
console.log(user.name);
// Реализовать функцию нахождения площади круга, исходя из его радиуса. PI * r^2
function circleArea(radius) {
    if (radius < 0)
        throw new Error('The radius cannot be negative.');
    return Math.PI * radius * radius;
}
const r = 5;
const area = circleArea(r);
console.log(`Area of ​​a circle with radius: ${r} = ${area.toFixed(2)}`);
const userObj = {
    name: 'John',
    age: 30,
    email: 'example@gmail.com',
};
const userObj2 = {
    name: 'John',
    age: 30,
    email: 'example@gmail.com',
};
function printUserInfo(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
}
;
function printUserInfo2(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
}
;
printUserInfo(userObj);
printUserInfo2(userObj);
function message(textMessage) {
    return `Text message: ${textMessage}`;
}
console.log('Hallo, Bob');
//# sourceMappingURL=index.js.map