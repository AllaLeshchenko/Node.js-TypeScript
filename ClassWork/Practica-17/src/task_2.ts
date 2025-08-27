// Создайте функцию, которая принимает два числа и возвращает их сумму. Укажите типы параметров и возвращаемого значения.
function addNumbers(a: number, b: number): number {
  return a + b;
};

// Напишите функцию, которая принимает строку и возвращает её в верхнем регистре.
// Используйте Union типы для создания функции
function toUpperCase(str: string): string {
  return str.toUpperCase();
}

// Напишите функцию, которая принимает либо строку, либо число.
// Если это строка, функция должна вернуть её длину.
// Если это число, функция должна просто вернуть его.
function fc(value: string | number): number {
  if(typeof value === 'string') {
    return value.length;
  } else {
    return value;
  }
};

console.log(addNumbers(5, 10))
console.log(toUpperCase('hello world'))
console.log(fc('typescript'))
console.log(fc(15))



