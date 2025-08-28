// 1.Создайте переменную, которая может быть либо строкой, либо числом. 
// Затем напишите функцию, которая обрабатывает и выводит длину строки или умножает число на 2

let product: string | number = 'hello, world!';
// let product: string | number = 100;

function showProduct(value: string | number): string | number {
    if(typeof value === 'string'){
        return `Строка имеет длинну: ${value.length}`
    }else {
        return value * 2
    }
}
console.log(showProduct(product));


// 2.Напишите пример пересечения типов. Создайте два типа: `Person` и `Employee`, затем создайте объект,
// который объединяет свойства этих двух типов.
type Person = {
    name: string;
    age: number;
}
type Employee = {
    position?: string;
    department?: string;
}
type PersonEmployee = Person & Employee;

const worker: PersonEmployee = {
    name: 'Alex',
    age: 25,
    position: 'frontend',
    department: 'IT',
}

// 3.Создайте объект "User" с вложенными объектами, например, адрес с полями улица и город. Напишите
// функцию, которая выводит полную информацию о пользователе.
type User = {
    name: string;
    age: number;
    address: Address;
}
type Address = {
    street: string;
    city: string;
}
const user: User = {
    name: 'John',
    age: 25,
    address: { 
        street: 'Schmidt',
        city: 'Berlin'
    }
};
function printUser(user: User) : void {
    console.log(`Name: ${user.name}, age: ${user.age}, street: ${user.address.street}, city: ${user.address.city}`);
    // Name: John, age: 25, street: Schmidt, city: Berlin
    // console.log(`Name: ${user.name}, age: ${user.age}, street: ${user.address.street}, city: ${user.address.city}, address: ${JSON.stringify(user.address)}`);
    // c JSON.stringify будет такой вывод: 
    // Name: John, age: 25, street: Schmidt, city: Berlin, address: {"street":"Schmidt","city":"Berlin"}
}
printUser(user);

function printUserCycle(user: User): void {
    for (const key in user) {
       const value = user[key as keyof User];
        if(typeof value === 'object') {
            for (const subKey in value) {
                console.log(`${subKey}: ${value[subKey as keyof Address]}`)
            }
        } else {
            console.log(`${key}: ${value}`);
        }
    }
}
printUserCycle(user);

// 4.Создайте массив объектов "Product", каждый из которых содержит название и цену, так же добавьте
// опциональное поле - описание и поле с модификатором `readonly` - id. Напишите функцию, которая
// выводит все товары, их цены, id и описания, если они есть
type Product = {
  readonly id: number;
  name: string;
  price: number;
  description?: string; // опциональное поле
};

const products: Product[] = [
  { id: 1, name: "Ноутбук", price: 1500, description: "Игровой ноутбук с RTX 4060" },
  { id: 2, name: "Смартфон", price: 800 },
  { id: 3, name: "Монитор", price: 300, description: "27 дюймов, 144 Гц" }
];

function printProducts(products: Product[]): void {
  for (const product of products) {
    console.log(`ID: ${product.id}`);
    console.log(`Название: ${product.name}`);
    console.log(`Цена: $${product.price}`);
    
    if (product.description) {
      console.log(`Описание: ${product.description}`);
    } else {
      console.log(`Описание: отсутствует`);
    }
    console.log('------------------------');
  }
}

printProducts(products);


// 5.Определите интерфейс для объекта "Product", который имеет поля название (строка), цена (число) и категория (строка). Напишите функцию, принимающую объект этого типа и выводящую его свойства.
// Измените интерфейс так, чтобы поле категории было опциональным

interface Product1 {   // Интерфейс с опциональным полем category
  name: string;
  price: number;
  category?: string;
}
// Функция принимает объект типа Product1 и выводит все его свойства
function printProductProperty(product: Product1): void {
  for (const key in product) {
    console.log(`${key}: ${product[key as keyof Product1]}`);
  }
}
// Объект без поля category (т.к. оно опционально)
const product1: Product1 = {
  name: 'Orange',
  price: 6
};

printProductProperty(product1);

// 6.Создайте два интерфейса: "Person" с полями имя и возраст, и "Employee" с полем должность. 
// Расширьте интерфейс "Employee" от "Person" и создайте объект этого типа.
// Напишите функцию, которая принимает объект `Employee` и выводит его имя и должность.

interface Person1 {
    name: string;
    age: number;
}
interface Employee1 extends Person1 {
    position: string;
}
const employee1: Employee1 = {
    name: 'Nik',
    age: 33,
    position: 'backend',
}
function printEmployee1(employee1: Employee1): void {
    for (const key in employee1) {
        console.log(`${key}: ${employee1[key as keyof Employee1]}`);
    } 
}
printEmployee1(employee1)