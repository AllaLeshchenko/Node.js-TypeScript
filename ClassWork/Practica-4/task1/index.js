const _ = require('lodash');
const moment = require('moment')

 const numbers = [1, 2, 3, 4, 5, 68, 9, 90];
 const shuffled = _.shuffle(numbers);


const now = moment().format('YYYY-MM-DD HH:mm:ss')
console.log('Текущая дата и время', now);
 console.log('Shuffled array:', shuffled);