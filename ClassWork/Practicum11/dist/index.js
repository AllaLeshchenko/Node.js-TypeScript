"use strict";
function division(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль недопустимо.");
    }
    if (!Number.isFinite(a) && !Number.isFinite(b)) {
        throw new Error("Оба аргумента должны быть корректными числами.");
    }
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new Error("Один из аргументов - это значения NaN");
    }
    return a / b;
}
function printInfo(car) {
    for (let key in car) {
        const typeKey = key;
        console.log(typeKey);
        console.log(`${typeKey}: ${car[typeKey]}`);
    }
}
function printInfo1(car) {
    console.log(`Make: ${car.make}`);
    console.log(`Modele: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`isElectric: ${car.isElectric}`);
}
const newCar = {
    make: 'BMW',
    model: 'M4',
    year: 2023,
    isElectric: false,
};
printInfo(newCar);
//# sourceMappingURL=index.js.map