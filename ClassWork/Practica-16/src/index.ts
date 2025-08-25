function greet(name: string): string {
    return `Hello, my name is ${name}`;
}

const resultGreet = greet('Alex');
console.log(resultGreet);

console.log(greet('Alex'));

let count: number = 10;
let username: string = 'JohnDoe';
let isLoggetIn: boolean = false;

function add(a: number, b: number): number {
    return a+b;
}

console.log(add(75346, 1));

const user: {name: string, age: number} = {
    name: 'Alice',
    age: 30,
}

console.log(user.name);

// Реализовать функцию нахождения площади круга, исходя из его радиуса. PI * r^2
function circleArea(radius: number): number {
    if (radius<0) throw new Error('The radius cannot be negative.');
    return Math.PI*radius*radius;
}
const r: number = 5;
const area: number = circleArea(r);
console.log(`Area of ​​a circle with radius: ${r} = ${area.toFixed(2)}`);

interface User {
    name: string;
    age: number;
    email: string;
}
const userObj: User = {
    name: 'John',
    age: 30,
    email: 'example@gmail.com',
};

const userObj2: { name: string, age: number, email: string } = {
    name: 'John',
    age: 30,
    email: 'example@gmail.com',
};

function printUserInfo(user: { name: string, age: number, email: string }): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
};

function printUserInfo2(user: User): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
};

printUserInfo(userObj);
printUserInfo2(userObj);

function message(textMessage: string): string {
    return `Text message: ${textMessage}`
}
console.log(message('Hallo, Bob'));

// node --loader ts-node/esm src/index.ts