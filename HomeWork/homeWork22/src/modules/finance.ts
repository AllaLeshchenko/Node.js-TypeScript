// task2 - Пространства имен для финансовых операций

export namespace Finance {
    // Класс для расчёта кредита по формуле аннуитета
    export class LoanCalculator {
        constructor(
            public principal: number,
            public annualInterestRate: number,
            public numberOfMonths: number
        ) {}

        calculateMonthlyPayment(): number {
            const monthlyRate = this.annualInterestRate / 12 / 100;
            if (monthlyRate === 0) {
                return this.principal / this.numberOfMonths;
            }
            const coefficient = (monthlyRate * Math.pow(1 + monthlyRate, this.numberOfMonths)) /
                                (Math.pow(1 + monthlyRate, this.numberOfMonths) - 1);
            return this.principal * coefficient;
        }
    }

    // Класс для расчёта налога
    export class TaxCalculator {
        constructor(
            public income: number,
            public taxRate: number
        ) {}

        calculateTax(): number {
            return this.income * this.taxRate / 100;
        }
    }
}
