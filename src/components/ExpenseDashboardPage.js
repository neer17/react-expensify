import React from 'react';

import ConnectedExpenseList from './ExpenseList';
import ExpenseFiltersList from './ExpenseFiltersList'


const ExpenseDashboardPage = () => ( 
    <div>
        This is the dashboard page
        <ExpenseFiltersList />
        <ConnectedExpenseList />
    </div>
);

export default ExpenseDashboardPage;