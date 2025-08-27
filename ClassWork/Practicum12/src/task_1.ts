// Создайте объект `car`, который будет описывать машину.
// Объект должен содержать следующие свойства:
// `brand` (строка)
// `model` (строка)
// `year` (число)
// `isElectric` (булево значение)
// Затем напишите функцию `describeCar`, которая принимает этот объект в качестве параметра и возвращает 
// строку с описанием машины в следующем формате: "Brand Model (Year), Electric: Yes/No".

interface Car {
    brand: string;
    model: string;
    year: number;
    isElectric: boolean;
}

function describeCar(car: Car): string {
    const electric = car.isElectric ? 'yes': 'no'
    return `Brand: ${car.brand}, model: ${car.model}, year: ${car.year}, Electric: ${electric}`
}

const myCar: Car = {
    brand: 'Audi',
    model: 'A6',
    year: 2020,
    isElectric: false,
}

console.log(describeCar(myCar));
