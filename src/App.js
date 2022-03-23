import { useState } from 'react';

import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import AddTransaction from './components/AddTransaction/AddTransaction';
import Transactions from './components/Transactions/Transactions';
import Footer from './components/Footer/Footer';

function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleDelete = (transaction) => {
    const newTransactions = transactions.filter(
      (trans) => trans.id !== transaction.id
    );

    if (transaction.type === 'income') {
      setBalance(balance - transaction.amount);
    } else if (transaction.type === 'expense') {
      setBalance(balance + Number(transaction.amount));
    }

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
      <Transactions handleDelete={handleDelete} transactions={transactions} />
      <Footer />
    </div>
  );
}

export default App;
