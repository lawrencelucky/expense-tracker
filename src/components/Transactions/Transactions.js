import Transaction from '../Transaction/Transaction';

import './transactions.css';

const Transactions = () => {
  return (
    <div className='transactions-container'>
      <Transaction />
      <Transaction />
      <Transaction />
    </div>
  );
};

export default Transactions;
