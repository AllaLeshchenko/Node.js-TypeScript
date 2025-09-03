import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    type: {type: String, enum: ['income', 'expense' ], required: true},
    amount: {type: Number, required: true},
    date: {type: Date, default: Date.now}
});

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    initialBalance:{ type: Number, required: true, min: [0, 'Initial Balance cannot be negativ']},
    currentBalance:{ type: Number, required: true, min: [0, 'Current Balance cannot be negativ']},
    transactions: [transactionSchema]
});

userSchema.methods.addTransaction = function (transaction) {
  if (
    transaction.type === "expense" &&
    transaction.amount > this.currentBalance
  ) {
    throw new Error("Недостаточно средств для расхода");
  }
  this.currentBalance +=
    transaction.type === "income" ? transaction.amount : -transaction.amount;
  this.transactions.push(transaction);
  return this.save();
};

const User = mongoose.model('User', userSchema);
export default User;