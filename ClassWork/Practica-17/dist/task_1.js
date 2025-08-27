"use strict";
let myString = 'My string';
let myNumber = 5.56;
let isAnswer = true;
// myNumber = 'abcde';
let myNull = null;
// let myUndefined: undefined = undefined;
// let myUndefined: undefined;
let myUndefined;
console.log(myUndefined);
// myNull= 'hello';
myUndefined = 'hello';
let myString2 = 'My string2';
let myString3 = 'My string3';
// myString2 = 5;
let myNull2 = null;
let myNull3 = null;
myNull3 = 34;
let myAny = true;
myAny = 7;
function describeString(value) {
    return `Это строка со значением: ${value}`;
}
function describeNumber(value) {
    return `Это число со значением: ${value}`;
}
function describeBoolean(value) {
    return `Это логическое значением: ${value}`;
}
function describeNull(value) {
    return `Это тип null со значением: ${value}`;
}
function describeUndefined(value) {
    return `Это тип undefined со значением: ${value}`;
}
function describeAny(value) {
    return `Это тип any со значением: ${value}`;
}
console.log(describeString('Hello, world'));
console.log(describeNumber(7));
console.log(describeBoolean(true));
console.log(describeNull(null));
console.log(describeUndefined(undefined));
console.log(describeAny('Это строка'));
console.log(describeAny(98725));
//# sourceMappingURL=task_1.js.map