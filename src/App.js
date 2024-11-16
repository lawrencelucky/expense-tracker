import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import Transactions from "./components/Transactions/Transactions";
import Footer from "./components/Footer/Footer";

function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    const storedBalance = JSON.parse(localStorage.getItem("balance"));

    if (storedTransactions) {
      setTransactions(storedTransactions);
    }

    if (storedBalance) {
      setBalance(storedBalance);
    }
  }, []);

  const handleDelete = (transaction) => {
    const newTransactions = transactions.filter(
      (trans) => trans.id !== transaction.id
    );

    if (transaction.type === "income") {
      setBalance(balance - transaction.amount);
      const stringifiedBalance = JSON.stringify(balance - transaction.amount);
      localStorage.setItem("balance", stringifiedBalance);
    } else if (transaction.type === "expense") {
      setBalance(balance + Number(transaction.amount));
      const stringifiedBalance = JSON.stringify(
        balance + Number(transaction.amount)
      );
      localStorage.setItem("balance", stringifiedBalance);
    }

    const stringifiedTransactions = JSON.stringify(newTransactions);

    localStorage.setItem("transactions", stringifiedTransactions);
    setTransactions(newTransactions);
  };

  return (
    <div>
      <Header />
      <Balance balance={balance} />
      <AddTransaction
        currentTransaction={transactions}
        addTransactionFn={setTransactions}
        setBalance={setBalance}
        previousBalance={balance}
      />
      {!transactions.length ? (
        <p className="no-transaction">
          You do not have any transaction at the monent
        </p>
      ) : (
        <Transactions handleDelete={handleDelete} transactions={transactions} />
      )}
      <Footer />
    </div>
  );
}

export default App;
