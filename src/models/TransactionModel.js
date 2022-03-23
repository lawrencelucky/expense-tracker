class Transaction {
  constructor(type, amount, description) {
    this.type = type;
    this.amount = amount;
    this.description = description;
    this.id = Math.random();
  }
}

export default Transaction;
