import React, { useState } from 'react'
import { Card } from '../UI/Card';
import { ExpenseFilter } from './ExpenseFilter';
import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';
import { ExpensesChart } from './ExpensesChart';
import { ExpensesList } from './ExpensesList';

export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <>
      <Card className='expenses'>
        <ExpenseFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  )
}
