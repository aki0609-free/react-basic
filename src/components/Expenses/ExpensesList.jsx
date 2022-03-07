import React from 'react'
import { ExpenseItem } from './ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = (props) => {
    const expensesContent = props.items.length === 0
  ? (
    <h2 className='expenses-list__fallback'>No Expenses Found</h2>
  ) : (
    props.items.map(expense => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        id={expense.id}
        key={expense.id}
      />
    ))
  )

  return (
    <ul className='expenses-list'>
      {expensesContent}
    </ul>
  )
}
