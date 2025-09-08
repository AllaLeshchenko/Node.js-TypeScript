import minus, { add, multiply } from "./modules/mathUtils.js";
import { Shapes } from './modules/shapes.js';
console.log(add(3, 5));
console.log(multiply(7, 6));
console.log(minus(10, 3));
const cube = new Shapes.ThreeD.Cube(10);
const sphere = new Shapes.ThreeD.Sphere(5);
console.log(`Площадь поверхности куба: ${cube.getPerimeter()}, объем: ${cube.getVolume()}`);
console.log(`Площадь поверхности сферы: ${sphere.getSurfaceArea()}, объем: ${sphere.getVolume()}`);
//# sourceMappingURL=app.js.map