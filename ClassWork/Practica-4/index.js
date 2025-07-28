const _ = require('lodash');

console.log(5+5);
console.log(5+10);


const obj = {
    a: {
        b: [
            {c: "", d: {}}, 
            {c: 123}
        ]
    }
}

const numbers = [1,2,3,4,5,6,7,87];
const randomArrNumbers = _.shuffle(numbers);

console.log(randomArrNumbers);