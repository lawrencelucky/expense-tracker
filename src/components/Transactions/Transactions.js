import Transaction from '../Transaction/Transaction';

import './transactions.css';

const Transactions = (props) => {
  console.log(props.transactions);
  return (
    <div className='overall-container'>
      <div className='transactions-container'>
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
