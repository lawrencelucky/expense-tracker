class Transaction {
  constructor(type, amount, description, date = Date.now()) {
    this.type = type;
    this.amount = amount;
    this.description = description;
    this.id = Math.random();
    this.date = date;
  }
}

export default Transaction;
