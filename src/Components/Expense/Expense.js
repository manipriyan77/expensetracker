import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expense.scss";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expense = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("");

  const yearChangeHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  const filteredExpense = items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onFilterYear={yearChangeHandler} />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expense;
