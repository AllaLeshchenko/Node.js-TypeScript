// task1 - Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.

const sumEvenNumbers = (numbers: number[]): number => {
    return numbers
        .filter(num => num % 2 === 0)  // отбираем только чётные числа
        .reduce((sum, num) => sum + num, 0)  // суммируем эти числа, начиная с 0
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(sumEvenNumbers(arr)); 




// task2 - Определите интерфейс `StringToBooleanFunction` для функции, которая принимает строку и возвращает `boolean` 
// (например, проверяет, является ли строка пустой). Реализуйте такую функцию.

interface StringToBooleanFunction {
    (input: string): boolean
}

// функция, которая проверяет, пустая ли строка
const isEmptyString: StringToBooleanFunction = (str) => {
  return str.trim() === ''; // trim() для удаления пробелов по краям, чтобы строка из пробелов считалась пустой
};
console.log(isEmptyString(""));           // true
console.log(isEmptyString("   "));        // true
console.log(isEmptyString("hello"));      // false



// task3 - Создайте тип `CompareStrings` для функции, принимающей две строки и возвращающей `boolean` 
// (например, для проверки равенства строк). Напишите функцию, соответствующую этому типу.

 type CompareStrings = {
    (a: string, b: string): boolean
 }
 
 const compareStrings: CompareStrings = function (a, b) {
  return a === b;
};

console.log(compareStrings('hello', 'hello')); // true
console.log(compareStrings('Hello', 'hello')); // false (регистр важен)

// Сравнение без учёта регистра
const compareStringsIgnoreCase: CompareStrings = (a, b) => {
  return a.toLowerCase() === b.toLowerCase();
};

console.log(compareStringsIgnoreCase('Hello', 'hello')) // true




// task4 - Напишите обобщенную функцию `getLastElement`, 
// которая принимает массив любого типа и возвращает последний элемент этого массива.

function getLastElement<T>(arr: T[]): T | undefined { 
    return arr[arr.length - 1]
}

console.log(getLastElement([1, 2, 3]));            // 3
console.log(getLastElement(['a', 'b', 'c']));      // 'c'
console.log(getLastElement([true, false, true]));  // true
console.log(getLastElement([]));                   // undefined



// task5 - Создайте обобщенную функцию `makeTriple`, 
// которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.

// Создадим обобщённый интерфейс
interface MakeTripleFn {
  <T>(a: T, b: T, c: T): T[];
}

const makeTriple: MakeTripleFn = function <T>(a: T, b: T, c: T): T[] {
  return [a, b, c];
};

console.log(makeTriple(1, 2, 3));           
console.log(makeTriple('a', 'b', 'c'));     
console.log(makeTriple(true, false, true));

///////
function makeTriple1<T>(a: T, b: T, c: T): T[] {
  return [a, b, c];
}
const numbers = makeTriple1(1, 2, 3);              
const strings = makeTriple1("a", "b", "c");         
const booleans = makeTriple1(true, false, true);    

console.log(numbers);   
console.log(strings);   
console.log(booleans);