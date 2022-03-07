import React, { useState } from 'react';
import { ExpenseForm } from './ExpenseForm';
import './NexExpense.css';

export const NexExpense = ({ onSaveExpenseData }) => {
  const [isEditing, setIsEditing] = useState(false);

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={() => setIsEditing(true)}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={stopEditingHandler} /> }
    </div>
  )
}
