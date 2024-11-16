import { useState } from "react";
import Transaction from "../../models/TransactionModel";
import "./addTransaction.css";

const AddTransaction = (props) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const [transactionType, setTransactionType] = useState("income");

  const handleTransactionType = (evt) => {
    setTransactionType(evt.target.value);
  };

  const submitTransaction = (evt) => {
    evt.preventDefault();

    const trans = new Transaction(transactionType, amount, description);

    if (transactionType === "expense") {
      const newBalance = props.previousBalance - Number(amount);
      props.setBalance(newBalance);

      const stringifiedBalance = JSON.stringify(newBalance);
      localStorage.setItem("balance", stringifiedBalance);
    } else if (transactionType === "income") {
      const newBalance = props.previousBalance + Number(amount);
      props.setBalance(newBalance);

      const stringifiedBalance = JSON.stringify(newBalance);
      localStorage.setItem("balance", stringifiedBalance);
    }

    props.addTransactionFn([...props.currentTransaction, trans]);
    setDescription("");
    setAmount("");
  };

  return (
    <div className="add-transaction-container">
      <form onSubmit={submitTransaction}>
        <select onChange={handleTransactionType}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Transaction Description"
          value={description}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
