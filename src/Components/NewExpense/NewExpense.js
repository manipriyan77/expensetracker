import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = ({ onAddExpense }) => {
  const newExpense = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    console.log(expenseData);
    return expenseData;
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={newExpense} />
    </div>
  );
};

export default NewExpense;
