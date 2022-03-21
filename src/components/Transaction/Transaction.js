import { BsTrash } from 'react-icons/bs';

import './transaction.css';

const Transaction = () => {
  return (
    <div className='transaction-container'>
      <div>
        <p className='transaction-amount'>$5</p>
        <p className='transaction-type'>Expense</p>
      </div>
      <div className='transaction-description'>
        <p>Greek Yoghurt</p>
      </div>
      <BsTrash className='trash-icon' />
    </div>
  );
};

export default Transaction;
