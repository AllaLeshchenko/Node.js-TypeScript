// Создайте функцию, которая не возвращает значения (`void`) и выполняет простую задачу:
// Напишите функцию, которая принимает строку и выводит её в консоль. Убедитесь, что функция не возвращает никакого значения.
function notGetValue(str: string): void {
    console.log(str);
}

notGetValue('hello, world');


// Напишите пример функции, которая использует тип `never`:
// Создайте функцию, которая выбрасывает исключение (ошибку) с переданным сообщением.
function neverNotGetValue(message: string): never {
    throw new Error (message);
}

neverNotGetValue('Error');