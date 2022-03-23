import CurrencyFormat from 'react-currency-format';

import './balance.css';

const Balance = (props) => {
  return (
    <div className='balance-container'>
      <CurrencyFormat
        value={props.balance}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(balance) => <p>{balance}</p>}
      />
    </div>
  );
};

export default Balance;
