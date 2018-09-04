import React from 'react';
import { connect } from 'react-redux';

import removeExpense from './../actions/RemoveExpense';
import editExpense from './../actions/EditExpense';
import ExpenseForm from './ExpenseForm';

const EditExpense = (props) => (
        <div>
        <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
            props.dispatch(editExpense(expense));
            // props.dispatch(addExpense(expense))
            props.history.push('/');
        }}/>
        <button onClick={() => {
            props.dispatch(removeExpense({id: props.expense.id}))
            props.history.push('/');
        }}>Remove Expense</button>
        </div>
);

const mapToTheState = (state, props) => {
    return { expense: state.expenses.find(expense => expense.id === props.match.params.id) };   
}

export default connect(mapToTheState)(EditExpense);