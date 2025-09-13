import { capitalize, reverseString } from "./modules/stringUtils.js";
import { Finance } from './modules/finance.js';
import { UserManagement } from './modules/userManagement.js';
import { generateFibonacci, generatePrimeNumbers } from './modules/sequenceUtils.js';

// task1
const example1 = "hello";
const example2 = "typescript";
console.log(`capitalize("${example1}") → ${capitalize(example1)}`);
console.log(`reverseString("${example2}") → ${reverseString(example2)}`);

// task2
const loan = new Finance.LoanCalculator(10000, 12, 10);
console.log(`Ежемесячный платёж: ${loan.calculateMonthlyPayment().toFixed(2)}`);
const tax = new Finance.TaxCalculator(100, 13);
console.log(`Налог на доход: ${tax.calculateTax().toFixed(2)}`);

// task3
const admin = new UserManagement.Admin.AdminUser("Ivan", "ivan@example.com");
console.log(admin.getInfo());
admin.grantSuperAdmin();      
console.log(admin.getInfo()); 
admin.revokeSuperAdmin();     
console.log(admin.getInfo()); 

// task4 
const fibLimit = 100;
const primeLimit = 50;
const fibonacci = generateFibonacci(fibLimit);
console.log(`Числа Фибоначчи до ${fibLimit}:`, fibonacci.join(', '));
const primes = generatePrimeNumbers(primeLimit);
console.log(`Простые числа до ${primeLimit}:`, primes.join(', '));