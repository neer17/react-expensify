import React from 'react';
import { connect } from 'react-redux';
import addExpense from './../actions/AddExpense';

import ExpenseForm from './ExpenseForm';

const AddExpenseForm = (props) => (
    <div>
        <h1>Add Expense Page</h1>
        <ExpenseForm
        onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')
        }}
        />
    </div>
);

export default connect()(AddExpenseForm);

