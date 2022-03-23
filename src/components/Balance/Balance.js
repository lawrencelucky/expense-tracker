import './balance.css';

const Balance = (props) => {
  return (
    <div className='balance-container'>
      <p>${props.balance}</p>
    </div>
  );
};

export default Balance;
