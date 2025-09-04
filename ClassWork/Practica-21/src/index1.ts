// 1.Создайте абстрактный класс `Shape`, который будет представлять фигуру. В этом классе объявите:
//   Абстрактное поле `name` типа `string`, которое будет задавать имя фигуры.
//   Абстрактный метод `calculateArea()`, который будет возвращать площадь фигуры (тип `number`).
// 2.Реализуйте два класса — `Circle` и `Rectangle`, которые будут наследовать `Shape`:
//   `Circle` должен иметь поле `radius` и реализовывать метод `calculateArea()` для вычисления площади круга.
//   `Rectangle` должен иметь поля `width` и `height` и реализовывать метод `calculateArea()` для вычисления площади прямоугольника.
// 3.В каждом классе задайте значение поля `name` в соответствии с типом фигуры (`"Circle"` и `"Rectangle"` соответственно).
abstract class Shape{
    abstract name: string;
    abstract calculateArea(): number;
}
class Circle extends Shape{
    name = 'Circle';

    constructor(public radius: number){
        super();
    }
    calculateArea(): number {
        return Math.PI*this.radius*this.radius;
    }
}
class Rectangle extends Shape{
    name = 'Rectangle';

    constructor(public width: number, public height: number ){
        super();
    }
    calculateArea(): number {
        return this.width*this.height;
    }
}
const circle = new Circle(7);
const rectangle = new Rectangle(20, 30);

console.log(circle);
console.log(rectangle);
console.log(circle.calculateArea());
console.log(rectangle.calculateArea());