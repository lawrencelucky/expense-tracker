import { BsTrash } from "react-icons/bs";

import "./transaction.css";
import CurrencyFormat from "react-currency-format";
import moment from "moment";

const Transaction = (props) => {
  return (
    <div className="transaction-container">
      <div>
        <CurrencyFormat
          value={props.amount}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
          renderText={(amount) => (
            <p className="transaction-amount">{amount}</p>
          )}
        />
        <p className="transaction-date">
          {moment(props.transaction.date).format("MMM Do YY, h:mm a")}
          {/* {new Date(props.transaction.date).toLocaleDateString()} */}
        </p>
      </div>
      <div className="transaction-description-container">
        <p
          className={`transaction-type ${
            props.type === "expense" ? "expense" : "income"
          }`}
        >
          {props.type === "expense" ? "Expense" : "Income"}
        </p>{" "}
        - <p className="transaction-description">{props.description}</p>
      </div>
      <BsTrash
        className="trash-icon"
        onClick={() => props.handleDelete(props.transaction)}
      />
    </div>
  );
};

export default Transaction;
