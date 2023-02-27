import React, { useState } from "react";

import NewExpense from "./Components/NewExpense/NewExpense";
import Expense from "./Components/Expense/Expense";
import "./App.css";

const dummy_data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expense, setExpense] = useState(dummy_data);

  const addExpenseHandler = (expenses) => {
    setExpense((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expense} />
    </div>
  );
};

export default App;
