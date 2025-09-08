import { sumArray, findMax } from "./modules/arrayUtils.js";
import { DateUtils} from "./modules/dateUtils.js";


const numbers = [3, 7, 2, 9, 4];


console.log("Array:", numbers);
console.log("Sum:", sumArray(numbers));       
console.log("Max:", findMax(numbers));        

// console.log(DateUtils.formatDate(new Date()));
// console.log(DateUtils.daysBetween(new Date("2025-09-01"), new Date("2025-09-08")));

console.log(DateUtils.formatDate(new Date()));
console.log(DateUtils.daysBetween(new Date(2026, 5, 15), new Date()));