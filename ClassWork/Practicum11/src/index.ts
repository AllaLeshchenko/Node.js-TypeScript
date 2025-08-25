function division(a: number, b: number): number {
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

// console.log(division(10, 3)); // 3.33
// console.log(division(10, 0)); // 

interface Car {
    make: string;
    model: string;
    year: number;
    isElectric: boolean;
}

function printInfo(car: Car): void {
    for (let key in car) {
        const typeKey = key as keyof Car;
        console.log(typeKey);
        console.log(`${typeKey}: ${car[typeKey]}`);
    } 
}

function printInfo1(car: Car): void {
    console.log(`Make: ${car.make}`);
    console.log(`Modele: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`isElectric: ${car.isElectric}`);
}

const newCar: Car = {
    make: 'BMW',
    model: 'M4',
    year: 2023,
    isElectric: false,
}
printInfo(newCar);



const nums: number[] = [10, 20, 30, 40, 50];

function calculateSum(arrNumbers: number[]): number {
    return arrNumbers.reduce((acc: number, curr: number) =>  acc + curr, 0)
}