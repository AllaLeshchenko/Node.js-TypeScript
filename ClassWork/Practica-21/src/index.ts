// Абстрактный класс
abstract class Animal {
    eat(): void {
        console.log('Это животное ест');
    }
    abstract makeSound(): void;
}

// const animal = new Animal();

class Dog extends Animal{
    makeSound(): void {
        console.log('Собака лает');
    }
}

class Cat extends Animal{
    makeSound(): void {
        console.log('Кошка мяукает');
    }
}

const sharik = new Dog();
console.log(sharik);
sharik.eat();
sharik.makeSound();

const myrka = new Cat();
myrka.eat();
myrka.makeSound();


// Создайте абстрактный класс `Employee`, который будет представлять сотрудника. В этом классе определите абстрактный метод `calculateSalary()`. Этот метод должен возвращать зарплату сотрудника, но не должен иметь реализации в самом `Employee`.
// Создайте два класса, которые будут наследовать `Employee`:
// `FullTimeEmployee` — для сотрудников на полной ставке.
// `PartTimeEmployee` — для сотрудников, работающих неполный рабочий день.
// В каждом из этих классов реализуйте метод `calculateSalary()` по-своему:
// В `FullTimeEmployee` зарплата может рассчитываться как фиксированная сумма.
// В `PartTimeEmployee` зарплата может зависеть от количества отработанных часов и почасовой ставки.
abstract class Employee{
    constructor(public name: string){}

    abstract calculateSalary(): number;
}

class FullTimeEmployee extends Employee {
    constructor(name: string, private fixedSalary: number){
        super(name);
    }

    calculateSalary(): number {
        return this.fixedSalary;
    }
}

class PartTimeEmployee extends Employee{
    constructor(name: string, private hoursWork: number, private hourRate: number){
        super(name);
    }

    calculateSalary(): number {
        return this.hoursWork * this.hourRate;
    }
}
const johnFullTime = new FullTimeEmployee('john', 3000);
const annaPartTime = new PartTimeEmployee('Anna', 120, 30);

console.log(johnFullTime);
console.log(annaPartTime);

console.log(johnFullTime.calculateSalary());
console.log(annaPartTime.calculateSalary());



// Создайте абстрактный класс `Vehicle`, в котором будет абстрактный метод `move()`.
// Реализуйте два класса — `Car` и `Plane`, которые будут наследовать `Vehicle` и по-разному реализовывать метод `move()`:
// `Car` должен выводить сообщение "Машина едет по дороге".
// `Plane` должен выводить сообщение "Самолёт летит по воздуху".
// Создайте массив типа `Vehicle[]`, включающий в себя объекты классов `Car` и `Plane`.
// Реализуйте цикл, который проходит по массиву и вызывает метод `move()` для каждого элемента, выводя соответствующее сообщение.
abstract class Vehicle{
    abstract move(): void;
}
class Car extends Vehicle{
    move(): void {
        console.log('Машина едет по дороге');
    }
    honk(): void {
        console.log('би-би')
    }
}
class Plane extends Vehicle{
    move(): void {
        console.log('Самолёт летит по воздуху');
    }
    flyHeight(): void {
        console.log('Высота 10000м')
    }
}

const vehicles : Vehicle[] = [
    new Car(),
    new Plane(),
]
const car: Vehicle = new Car();  
car.move();

vehicles.forEach(vehicle => vehicle.move());