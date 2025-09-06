// task4 - Абстрактный класс Account
// Абстрактный класс Account
abstract class Account {
    protected balance: number = 0;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;

    getBalance(): number {
        return this.balance;
    }
}

// Сберегательный счет
class SavingsAccount extends Account {
    private interestRate: number; // в процентах, например: 5 = 5%

    constructor(initialBalance: number, interestRate: number) {
        super(initialBalance);
        this.interestRate = interestRate;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited $${amount} to SavingsAccount.`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds in SavingsAccount.");
        } else {
            this.balance -= amount;
            console.log(`Withdrew $${amount} from SavingsAccount.`);
        }
    }

    // Метод начисления процентов
    addInterest(): void {
        const interest = this.balance * (this.interestRate / 100);
        this.balance += interest;
        console.log(`Interest of $${interest.toFixed(2)} added to SavingsAccount.`);
    }
}

// Расчетный счет (с комиссией)
class CheckingAccount extends Account {
    private fee: number; // фиксированная комиссия

    constructor(initialBalance: number, fee: number) {
        super(initialBalance);
        this.fee = fee;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited $${amount} to CheckingAccount.`);
    }

    withdraw(amount: number): void {
        const totalAmount = amount + this.fee;
        if (totalAmount > this.balance) {
            console.log("Insufficient funds in CheckingAccount.");
        } else {
            this.balance -= totalAmount;
            console.log(`Withdrew $${amount} with a fee of $${this.fee} from CheckingAccount.`);
        }
    }
}

const savings = new SavingsAccount(1000, 5); // 5% годовых
const checking = new CheckingAccount(500, 2); // $2 комиссия

console.log("\n--- Savings Account Operations ---");
savings.deposit(200);
savings.withdraw(100);
savings.addInterest();
console.log(`Savings Balance: $${savings.getBalance().toFixed(2)}`);

console.log("\n--- Checking Account Operations ---");
checking.deposit(100);
checking.withdraw(50);
checking.withdraw(600); // Превышение баланса
console.log(`Checking Balance: $${checking.getBalance().toFixed(2)}`);
