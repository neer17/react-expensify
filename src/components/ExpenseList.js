import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from './../selector/GetVisibleExpenses'; 
import EditExpense from './EditExpensePage';
import EditExpensePage from './EditExpensePage';

const ExpenseList = (props) => (
    <div>
        {props.expenses.map((expense) => {
            return <div>
                <ExpenseListItem key={expense.id} {...expense} />
              </div>;
        })}
    </div>
);

const mapToTheState = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
  filters: state.filters
});

//  this returns Higher Order Stateless Functional component
export default connect(mapToTheState)(ExpenseList); 