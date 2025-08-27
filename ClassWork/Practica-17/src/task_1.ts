let myString: string = 'My string';
let myNumber: number = 5.56;
let isAnswer: boolean = true;

// myNumber = 'abcde';

let myNull: null = null;
// let myUndefined: undefined = undefined;
// let myUndefined: undefined;
let myUndefined;
console.log(myUndefined);


// myNull= 'hello';
myUndefined = 'hello';

let myString2: string = 'My string2';
let myString3 = 'My string3';
// myString2 = 5;

let myNull2: null = null;
let myNull3 = null;
myNull3 = 34;

let myAny: any = true;
myAny = 7;

function describeString(value: string): string{
    return `Это строка со значением: ${value}`;
}

function describeNumber(value: number): string{
    return `Это число со значением: ${value}`;
}

function describeBoolean(value: boolean): string{
    return `Это логическое значением: ${value}`;
}

function describeNull(value: null): string{
    return `Это тип null со значением: ${value}`;
}

function describeUndefined(value: undefined): string{
    return `Это тип undefined со значением: ${value}`;
}

function describeAny(value: any): string{
    return `Это тип any со значением: ${value}`;
}

console.log(describeString('Hello, world'));
console.log(describeNumber(7));
console.log(describeBoolean(true));
console.log(describeNull(null));
console.log(describeUndefined(undefined));
console.log(describeAny('Это строка'));
console.log(describeAny(98725));