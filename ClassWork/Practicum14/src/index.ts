// Задание 1
// Класс `Car` и его наследник `ElectricCar`
// 1. Создайте класс `Car`, который будет содержать свойства `make` (марка автомобиля) и `year` (год выпуска).
// 2. Добавьте метод `start()`, который выводит в консоль сообщение `"The car is starting"`.
// 3. Затем создайте класс-наследник `ElectricCar`, который добавит новое свойство `batteryLevel` (уровень заряда батареи).
// 4. Переопределите метод `start()`, чтобы он выводил сообщение `"The electric car is starting"`.
class Car {
    make: string;
    year: number;

    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }
    start(): void { 
        console.log('The car is starting')
    }
}

class ElectricCar extends Car {
    batteryLevel: number;

    constructor(make: string, year: number, batteryLevel: number) {
        super(make, year);
        this.batteryLevel = batteryLevel;
    }
    start(): void { 
        console.log('The electric car is starting')
    }
}

const car = new Car('BMW', 2025);
const electricCar = new ElectricCar('AUDI', 2025, 100)
console.log(car, electricCar);
car.start();
electricCar.start();



// Задание 2
// Статический метод для создания объектов
// 1. Создайте класс `Product`, который имеет свойства `name` (название продукта) и `price` (цена продукта).
// 2. Добавьте статический метод `createDiscountedProduct`, который принимает название продукта, цену и
// процент скидки, а затем возвращает новый объект `Product` с учетом скидки
class Product {
    constructor(public name: string, public price: number) {}
    static createDiscountedProduct(name: string, price: number, discount: number): Product {
        const newPrice = price - (price * discount)/100;
        return new Product(name, newPrice);
    }
}

const product = Product.createDiscountedProduct('Orange', 10, 5);
console.log(product);


// Задание 3
// Модификаторы доступа в классе `BankAccount`
// 1. Создайте класс `BankAccount`, который содержит защищенное свойство `balance` (баланс).
// 2. Реализуйте метод `deposit()`, который увеличивает баланс, и метод `withdraw()`, который уменьшает
// баланс.
// 3. В классе `BankAccount` должен быть публичный метод `getBalance()`, который возвращает текущий
// баланс.
// 4. Создайте объект и проверьте работу методов.
