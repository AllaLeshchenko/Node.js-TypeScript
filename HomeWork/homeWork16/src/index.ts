// Задание 1 - Функция приветствия 
function greetUser(name: string): void {
  console.log(`Hallo, ${name}!`);
}

greetUser("Alla");


// Задание 2 - Типизация функции с объектом в качестве параметра
interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: Person): void {
  console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
}

const user: Person = {
  name: "Alex",
  age: 30,
  city: "Berlin"
};

printPersonInfo(user);


// Задание 3 - Простая типизация для числового параметра
function squareNumber(num: number): number {
  return num * num;
}

console.log(squareNumber(4)); // 16


// Задание 4 - Типизация функции с boolean
function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(10)); // true
console.log(isEven(7));  // false


// Задание 5 - Создание интерфейса для объекта
interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(student: Student): void {
  console.log(`Student: ${student.name}, Grade: ${student.grade}`);
}

const student1: Student = {
  name: "Оlga",
  grade: 5
};

printStudentInfo(student1);


// Задание 6 - Функция с типом `void`
function logMessage(message: string): void {
  console.log(message);
}

logMessage("This is a text message");