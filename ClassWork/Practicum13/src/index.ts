// Функции с типизацией
// 1. Создайте функцию `multiply`, которая принимает два числа и возвращает их произведение. Добавьте
// типизацию для параметров и возвращаемого значения.
// 2. Используйте явное указание типов для параметров и результата функции.
function multiply (a:number, b:number):number{
    return a * b
};

// 
const sum = (a:number, b:number):number => a*b

console.log(multiply(5,2));
console.log(sum(3,6));


// Функции с опциональными параметрами
// 1. Создайте функцию `greet`, которая принимает два параметра: имя (`name`) и опциональный параметр
// `greeting`.
// 2. Функция должна выводить строку приветствия, используя `greeting` (если оно указано) или стандартное
// "Hello" в противном случае.

const messageShow = (name: string, greeting?: string ): void => {
    if(greeting){
        console.log(`${greeting}, ${name}`)
    }else{
        console.log(name)
    }
};
messageShow('Vova');
messageShow('Alex', 'Hello');

////////
function greet(name: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${name}}`
}

console.log(greet('Bob'));
console.log(greet('Bob', 'Welcome'));


////////////////////////
function greetOne(name: string, greeting?: string): string {  // greeting?: string — опциональный параметр, то есть его можно не передавать
    return `${greeting ?? 'Hello'}, ${name}`  
}
// ?? — это оператор nullish coalescing. Он возвращает: greeting, если оно не null и не undefined и 'Hello', если greeting не передано (то есть undefined)

console.log(greetOne('Bob', 'Welcome'));


// Напишите стрелочную функцию `filterEvenNumbers`, которая принимает массив чисел и 
// возвращает новый массив, содержащий только четные числа.

const Arr: number[] = [1,2,3,4,5,6,7,8,9,10];

interface Variables {(arr: number[]): number[]}

const filterEvenNumbers: Variables = (arr) =>{
    return arr.filter((num)=>num % 2 === 0);
};

console.log(filterEvenNumbers(Arr))


// Обобщенная функция
// Создайте обобщенную функцию `reverseArray`, которая принимает массив любого
// типа и возвращает его элементы в обратном порядке.

// function reverseArray<T> — это объявление обобщённой функции.
// <T> — обобщённый тип (generic), который говорит TypeScript:
// "Тип T будет определён во время вызова функции — подставь, что нужно."
                                          // arr: T[] — входной параметр: массив элементов типа T (например, number[] или string[]).
function reverseArray<T>(arr:T[]): T[] {  // : T[] — функция возвращает массив того же типа, что и входной.
    return arr.slice().reverse()   // arr.slice() — создаёт копию массива, чтобы не менять оригинал.
}                                  // .reverse() — переворачивает массив в обратном порядке.

const arr1: number[] = [1,2,3,4,5,6,7,8,9,10];
const arrStr: string[] = ['apple', 'orange', 'kiwi', 'watermelon', 'papaya']

console.log(reverseArray(arr1));  // Результат — новый перевёрнутый массив того же типа.
console.log(reverseArray(arrStr));


// Обобщенный интерфейс
// 1. Определите обобщенный интерфейс `KeyValuePair<K, V`, который описывает пару "ключ-значение".
// 2. Реализуйте функцию `createKeyValuePair`, которая принимает ключ и значение и возвращает объект,
// соответствующий этому интерфейсу

// Интерфейс описывает объект, который содержит: key — ключ типа K , value — значение типа V
interface KeyValuePair<K, V> {    // <K, V> — это обобщённые параметры:
  key: K;                         // K — тип ключа
  value: V;                       // V — тип значения
}

function createKeyValuePair<K, V>(key: K, value: V): KeyValuePair<K, V> {
  return { key, value };
}

const pair1 = createKeyValuePair<string, number>('id', 123);
console.log(pair1); // { key: 'id', value: 123 }

const pair2 = createKeyValuePair<number, boolean>(1, true);
console.log(pair2); // { key: 1, value: true }

const pair3 = createKeyValuePair('name', 'Alice'); // TypeScript сам выводит типы
console.log(pair3); // { key: 'name', value: 'Alice' }


// Опциональные параметры с дефолтными значениями
// 1. Создайте функцию `calculateDiscount`, которая принимает цену (`price`) и опциональный параметр
// `discountRate` (по умолчанию 10%).
// 2. Функция должна возвращать цену с учетом скидки

function calculateDiscount(price: number, discountRate?: number): number {
  const rate = discountRate ?? 0.1; // если discountRate не передан, используем 10%
  return price - price * rate;
}

console.log(calculateDiscount(100));         // 90 (скидка 10% по умолчанию)
console.log(calculateDiscount(200, 0.2));    // 160 (скидка 20%)
console.log(calculateDiscount(150, 0));      // 150 (0% скидка — работает!)