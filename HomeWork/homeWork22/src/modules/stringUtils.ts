// task1 - Модули для работы со строками

// Делает первую букву строки заглавной
export function capitalize(str: string): string{
    return str.charAt(0).toUpperCase() + str.slice(1)  
}

// Переворачивает строку задом наперёд
export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}