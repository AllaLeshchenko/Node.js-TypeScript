export namespace Shapes {
    export class Circle{
        constructor(public radius: number){};

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }

        getPerimeter(): number {
            return 2 * Math.PI * this.radius;
        }
    }

    export class Square{
        constructor(public side: number){}; 
        getArea(): number {
            return this.side * this.side;
        }
        getPerimeter():number {
            return 4 * this.side;
        }
    }
    export namespace ThreeD{
        export class Cube{
            constructor(public side: number){}

            getVolume(): number{
                return Math.pow(this.side, 3)
            }
            getPerimeter(): number{
                return 6 * this.side ** 2
            }
        }
        export class Sphere{
            constructor(public radius: number){}
            getVolume(): number {
                return (4/3)*Math.PI*this.radius**3
            }
            getSurfaceArea(): number {
                return 4*Math.PI*this.radius**2
            }
        }
    }
}

const circle = new Shapes.Circle(5);
console.log(`Area of ​​a circle: ${circle.getArea()}. Circle perimeter: ${circle.getPerimeter()}`);
const square = new Shapes.Square(5);
console.log(`Area of ​​a square: ${square.getArea()}. Square perimeter: ${square.getPerimeter()}`);