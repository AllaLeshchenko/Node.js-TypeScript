// Комплексные типы

// 1 Union type
let variable: number | string = '3123';
variable = 234;
// variable = true;

// 2 Intersection 
type Person = {
    name: string;
}
type Employee = {
    salary: number;
}

type PersonEmployee = Person & Employee;

const worker: PersonEmployee = {
    name: 'Alex',
    salary: 500000,
    // position: 'fssdfsd'
}


// 3. Tuple
const userInfo: [string, number] = ['Alex', 500000];

// 4. Literal types
type Status = 'pending' | 'shipped' | 'delivered';

let status: Status = 'pending';

// 5. Interface
interface User {
    id: number;
    name: string;
}

const user: User = {
    id: 101,
    name: 'John',
}

// 6. Массивы
const arr: number[] = [12, 345, 546, 234];

// 7. Object
const car: { model: string; year: number; color: string } = {
    model: 'BMW',
    year: 2025,
    color: 'Black'
}


// Описание сложных объектов

interface Customer {
    name: string;
    email: string;
    organization: Organization;
}

interface Organization {
    name: string;
    products: string[];
}

const customer: { name: string; email: string; organization: { name: string; products: string[] } } = {
    name: 'John',
    email: 'example@gmail.com',
    organization: {
        name: 'BP',
        products: ['petrol', 'engine oil'],
    }
}

const customer2: Customer = {
    name: 'John',
    email: 'example@gmail.com',
    organization: {
        name: 'BP',
        products: ['petrol', 'engine oil'],
    }
}

// Интерфейсы для функций и массивов
interface Greet {
    (name: string): string;
}

type Greeting = (name: string) => string;

const greet: Greeting = (name) => {
    return `Hello, ${name}`;
}

interface StringArr {
    [index: number]: string;
}

type StringArray = {
    [index: number]: string;
}

const stringArr: StringArr = ['hello', 'goodbye'];


// T — "Type" (универсальный тип).
// U, V — дополнительные типы.
// K — "Key" (ключ, обычно в keyof).
// V — "Value" (значение).
// E — "Element" (элемент массива).
// R — "Result" (результат функции).

// 1.Напишите обобщенную функцию, которая принимает массив любого типа и возвращает первый элемент этого массива.
function getFirtsElement2<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirtsElement2<number>([2, 4, 6, 7]));
console.log(getFirtsElement2<string>(['dfs', 'erf', 'sdf']));