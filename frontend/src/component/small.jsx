import React from "react";
import "./ExpenseItem.css"; // Import CSS

const ExpenseItem = ({ title, amount, date, category, description }) => {
  return (
    <div className="expense-item">
      <div className="expense-details">
        <h2 className="expense-title">{title}</h2>
        <p className="expense-date">{date}</p>
        <p className="expense-category">Category: {category}</p>
        <p className="expense-description">{description}</p>
      </div>
      <div className="expense-amount">${amount}</div>
    </div>
  );
};

export default ExpenseItem;
