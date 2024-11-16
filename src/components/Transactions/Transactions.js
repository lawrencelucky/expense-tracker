import { useEffect } from "react";
import Transaction from "../Transaction/Transaction";

import "./transactions.css";

const Transactions = (props) => {
  useEffect(() => {
    const stringifiedTransactions = JSON.stringify(props.transactions);

    localStorage.setItem("transactions", stringifiedTransactions);
  }, [props.transactions]);

  return (
    <div className="overall-container">
      <div className="transactions-container">
        {props.transactions.map((transaction, index) => {
          return (
            <Transaction
              key={index}
              amount={transaction.amount}
              type={transaction.type}
              description={transaction.description}
              transaction={transaction}
              handleDelete={props.handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;
