import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((expenseItem) => {
        const { title, amount, date, id } = expenseItem;
        return <ExpenseItem key={id} title={title} amount={amount} date={date} />;
      })}
    </ul>
  );
};

export default ExpensesList;
