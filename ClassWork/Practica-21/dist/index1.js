"use strict";
// 1.Создайте абстрактный класс `Shape`, который будет представлять фигуру. В этом классе объявите:
//   Абстрактное поле `name` типа `string`, которое будет задавать имя фигуры.
//   Абстрактный метод `calculateArea()`, который будет возвращать площадь фигуры (тип `number`).
// 2.Реализуйте два класса — `Circle` и `Rectangle`, которые будут наследовать `Shape`:
//   `Circle` должен иметь поле `radius` и реализовывать метод `calculateArea()` для вычисления площади круга.
//   `Rectangle` должен иметь поля `width` и `height` и реализовывать метод `calculateArea()` для вычисления площади прямоугольника.
// 3.В каждом классе задайте значение поля `name` в соответствии с типом фигуры (`"Circle"` и `"Rectangle"` соответственно).
class Shape {
}
class Circle extends Shape {
    radius;
    name = 'Circle';
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    name = 'Rectangle';
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(7);
const rectangle = new Rectangle(20, 30);
console.log(circle);
console.log(rectangle);
console.log(circle.calculateArea());
console.log(rectangle.calculateArea());
//# sourceMappingURL=index1.js.map