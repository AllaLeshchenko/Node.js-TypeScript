// task2 - Пространства имен для финансовых операций
export var Finance;
(function (Finance) {
    // Класс для расчёта кредита по формуле аннуитета
    class LoanCalculator {
        principal;
        annualInterestRate;
        numberOfMonths;
        constructor(principal, annualInterestRate, numberOfMonths) {
            this.principal = principal;
            this.annualInterestRate = annualInterestRate;
            this.numberOfMonths = numberOfMonths;
        }
        calculateMonthlyPayment() {
            const monthlyRate = this.annualInterestRate / 12 / 100;
            if (monthlyRate === 0) {
                return this.principal / this.numberOfMonths;
            }
            const coefficient = (monthlyRate * Math.pow(1 + monthlyRate, this.numberOfMonths)) /
                (Math.pow(1 + monthlyRate, this.numberOfMonths) - 1);
            return this.principal * coefficient;
        }
    }
    Finance.LoanCalculator = LoanCalculator;
    // Класс для расчёта налога
    class TaxCalculator {
        income;
        taxRate;
        constructor(income, taxRate) {
            this.income = income;
            this.taxRate = taxRate;
        }
        calculateTax() {
            return this.income * this.taxRate / 100;
        }
    }
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (Finance = {}));
//# sourceMappingURL=finance.js.map