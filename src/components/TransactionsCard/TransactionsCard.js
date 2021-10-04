import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
const TransactionsCard = ({ transactions, cardId }) => {
  const { transactions_loading } = useSelector((state) => state.cards);
  if (transactions_loading === cardId) {
    return "Loading...";
  } else if (!transactions) {
    return "";
  } else if (!transactions?.length) {
    return "No transactions yet";
  } else if (transactions?.length) {
    return (
      <div className="transactions-container">
        {transactions?.map((transaction) => (
          <div className="transaction" key={transaction._id}>
            <p className="transaction-title">{transaction.title}</p>
            <p className="transaction-amount">{transaction.amount} $</p>
          </div>
        ))}
      </div>
    );
  }
};
export default TransactionsCard;
