
import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesListItem from './ExpensesListItem';
import ExpensesListFilters from './ExpensesListFilter';


const ExpenseDashboardPage = () => (
  <div>

    This is from my dashboard component
    <ExpensesListFilters />
    <ExpenseList/>
    <ExpensesListItem />

  </div>
)



export default ExpenseDashboardPage;
