import { BsTrash } from 'react-icons/bs';

import './transaction.css';

const Transaction = (props) => {
  return (
    <div className='transaction-container'>
      <div>
        <p className='transaction-amount'>${props.amount}</p>
        <p
          className={`transaction-type ${
            props.type === 'expense' ? 'expense' : 'income'
          }`}
        >
          {props.type === 'expense' ? 'Expense' : 'Income'}
        </p>
      </div>
      <div className='transaction-description'>
        <p>{props.description}</p>
      </div>
      <BsTrash
        className='trash-icon'
        onClick={() => props.handleDelete(props.transaction)}
      />
    </div>
  );
};

export default Transaction;
