export var Shapes;
(function (Shapes) {
    class Circle {
        radius;
        constructor(radius) {
            this.radius = radius;
        }
        ;
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
        getPerimeter() {
            return 2 * Math.PI * this.radius;
        }
    }
    Shapes.Circle = Circle;
    class Square {
        side;
        constructor(side) {
            this.side = side;
        }
        ;
        getArea() {
            return this.side * this.side;
        }
        getPerimeter() {
            return 4 * this.side;
        }
    }
    Shapes.Square = Square;
    let ThreeD;
    (function (ThreeD) {
        class Cube {
            side;
            constructor(side) {
                this.side = side;
            }
            getVolume() {
                return Math.pow(this.side, 3);
            }
            getPerimeter() {
                return 6 * this.side ** 2;
            }
        }
        ThreeD.Cube = Cube;
        class Sphere {
            radius;
            constructor(radius) {
                this.radius = radius;
            }
            getVolume() {
                return (4 / 3) * Math.PI * this.radius ** 3;
            }
            getSurfaceArea() {
                return 4 * Math.PI * this.radius ** 2;
            }
        }
        ThreeD.Sphere = Sphere;
    })(ThreeD = Shapes.ThreeD || (Shapes.ThreeD = {}));
})(Shapes || (Shapes = {}));
const circle = new Shapes.Circle(5);
console.log(`Area of ​​a circle: ${circle.getArea()}. Circle perimeter: ${circle.getPerimeter()}`);
const square = new Shapes.Square(5);
console.log(`Area of ​​a square: ${square.getArea()}. Square perimeter: ${square.getPerimeter()}`);
//# sourceMappingURL=shapes.js.map