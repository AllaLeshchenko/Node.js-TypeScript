// task 1 - Объединение и пересечение типов
type Admin = {
    name: string;
    permission: string[];
}

type User = {
    name: string;
    email: string;
}

type AdminUser = Admin & User;

const adminUser: AdminUser = {
    name: 'Alice',
    permission: ["read", "write", "delete"],
    email: 'alice@example.com'
}

// task 2 - Вложенные объекты и опциональные поля
type Engine = {
  type: string;
  horsepower: number;
};

type Car = {
  make: string;
  model: string;
  engine: Engine;
  year?: number; // опциональное поле
};

const car: Car = {
  make: "Toyota",
  model: "Camry",
  engine: {
    type: "V6",
    horsepower: 301,
  },
  year: 2021,
};

function printCarCycle(car: Car): void {
    for (const key in car) {
        const value = car[key as keyof Car];

        if (typeof value === 'object') {
            for (const subKey in value) {
                console.log(`${key}: ${value[subKey as keyof Engine]}`);
            }
        } else {
            console.log(`${key}: ${value}`);
        }
    }
}
printCarCycle(car);


// task 3 - Интерфейс для функции с объектом
interface Product  {
    name: string;
    price: number;
}

interface CalculateDiscount {
  (product: Product, discount: number): number;
}

function calculateDiscount(product: Product, discount: number): number {
  return product.price - product.price * (discount / 100);
}

const product: Product = { name: "Laptop", price: 1000 };
console.log(`Цена со скидкой: $${calculateDiscount(product, 15)}`);


// task 4 - Массив объектов и функции
interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: "John", salary: 4000 },
  { name: "Jane", salary: 4500 },
  { name: "Alice", salary: 5000 },
];

function getSalaries(empList: Employee[]): number[] {
  return empList.map(emp => emp.salary);
}

console.log(getSalaries(employees)); 


// task 5 - Наследование интерфейсов и работа с объектами
interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstName: "Tom",
  lastName: "Holland",
  grade: 5,
}

function printStudentInfo(student: Student): void {
    for (const key in student) {
        console.log(`${key}: ${student[key as keyof Student]}`);
    }
}
printStudentInfo(student);


// task 6 - Интерфейс для функции с несколькими параметрами
interface ConcatStrings {
  (str1: string, str2: string): string;
}

function concatStrings(str1: string, str2: string): string {
  return str1 + str2;
}

console.log(concatStrings("Hello, ", "world!"));
