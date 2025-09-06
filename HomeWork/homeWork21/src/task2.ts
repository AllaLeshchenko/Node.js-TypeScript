// task2 - Абстрактный класс Shape с цветом
abstract class Shape {
    abstract name: string;
    abstract calculateArea(): number;
}

// Абстрактный класс с цветом
abstract class ColoredShape extends Shape {
    abstract color: string;
}

// Класс ColoredCircle наследует ColoredShape
class ColoredCircle extends ColoredShape {
    name = 'ColoredCircle';
    
    constructor(public radius: number, public color: string) {
        super();
    }
    
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Класс ColoredRectangle наследует ColoredShape
class ColoredRectangle extends ColoredShape {
    name = 'ColoredRectangle';
    
    constructor(public width: number, public height: number, public color: string) {
        super();
    }
    
    calculateArea(): number {
        return this.width * this.height;
    }
}

const coloredCircle = new ColoredCircle(7, 'red');
const coloredRectangle = new ColoredRectangle(20, 30, 'blue');

console.log(`${coloredCircle.name} - Color: ${coloredCircle.color}, Area: ${coloredCircle.calculateArea()}`);
console.log(`${coloredRectangle.name} - Color: ${coloredRectangle.color}, Area: ${coloredRectangle.calculateArea()}`);
